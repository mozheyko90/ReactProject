import PropTypes from "prop-types";
import Counter from "../../../Counter/components/Counter";

const CountersManagerLayout = ({
  counters,
  handleCounterCreate,
  handleReset,
  handleCounterIncrement,
  handleCounterDecrement,
  handleCounterReset,
  handleCounterRemove,
  totalSum,
}) => {
  return (
    <div>
      <h1>Counters Manager</h1>
      <div>
        <button onClick={handleCounterCreate}>New Counter</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <h2>
        <p>Counters Amount: {counters.length}</p>
        <p>Counters Sum: {totalSum}</p>
      </h2>
      <div>
        {counters.map(({ id, countValue }) => (
          <Counter
            id={id}
            countValue={countValue}
            key={id}
            onIncrement={handleCounterIncrement}
            onDecrement={handleCounterDecrement}
            onReset={handleCounterReset}
            onRemove={handleCounterRemove}

          />
        ))}
      </div>
    </div>
  );
};

CountersManagerLayout.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      countValue: PropTypes.number,
    })
  ).isRequired,
};

export default CountersManagerLayout;
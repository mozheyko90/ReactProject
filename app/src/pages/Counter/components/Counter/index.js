import styles from "./index.module.scss";
import PropTypes from "prop-types";

const Counter = ({
  id,
  countValue,
  onIncrement,
  onDecrement,
  onReset,
  onRemove,
}) => {
  const isEven = countValue % 2 === 0;
  return (
    <div className={styles.wrapper} style={{ background: isEven ? "Deeppink" : "Lime" }}>
      <div className={styles.screen}>{countValue}</div>
      {countValue > 0 && (
        <div
          className={styles.screen}
        >
          {isEven ? "Even" : "Odd"}
        </div>
      )}

      <div className={styles.buttonsArea}>
        <button
          onClick={() => onDecrement(id)}
          className={styles.controlButton}
        >
          -
        </button>
        <button onClick={() => onReset(id)} className={styles.controlButton}>
          Reset
        </button>
        <button
          onClick={() => onIncrement(id)}
          className={styles.controlButton}
        >
          +
        </button>
      </div>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
export default Counter;
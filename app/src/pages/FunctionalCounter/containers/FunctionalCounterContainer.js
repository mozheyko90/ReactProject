import { useCounter } from "../../../hooks";
import Counter from "../../Counter/components/Counter";

const FunctionalCounterContainer = () => {
  const { count, handleDecrement, handleIncrement, handleReset } =
    useCounter(0);
  return (
    <>
      <Counter
        countValue={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
    </>
  );
};

export default FunctionalCounterContainer;
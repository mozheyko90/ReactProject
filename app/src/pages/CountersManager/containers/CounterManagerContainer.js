import React, { useCallback, useState } from "react";
import CountersManagerLayout from "../components/CounterManagerLayout";
import { v4 as uuid } from "uuid";

const CountersManagerContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleCounterCreate = () => {
    const id = uuid();
    const newCounter = {
      id,
      countValue: 0,
    };
    setCounters((state) => {
      const updatedCounters = state.map((counter) => {
        return {
          ...counter,
          countValue:
            counter.countValue % 2 === 0
              ? counter.countValue + 1
              : counter.countValue,
        };
      });

      return [...updatedCounters, newCounter];
    });
  };

  const handleReset = () => {
    setCounters([]);
  };


  const handleCounterIncrement = useCallback((id) => {
    setCounters((state) => {
      const counterCopy = [...state];

      const targetCounter = counterCopy.find((counter) => counter.id === id);

      targetCounter.countValue += 1;
      return counterCopy;
    });
  }, []);

  const handleCounterDecrement = useCallback((id) => {
    setCounters((state) => {
      const counterCopy = [...state];

      const targetCounter = counterCopy.find((counter) => counter.id === id);
      if (targetCounter.countValue > 0) {
        targetCounter.countValue -= 1;
      }

      return counterCopy;
    });
  }, []);

  const handleCounterReset = useCallback((id) => {
    setCounters((state) => {
      const counterCopy = [...state];

      const targetCounter = counterCopy.find((counter) => counter.id === id);

      targetCounter.countValue = 0;
      return counterCopy;
    });
  }, []);



  const handleCounterRemove = useCallback((id) => {
    setCounters((state) => {
      const counterCopy = [...state];

      const counterIndexToRemove = counterCopy.findIndex(
        (counter) => counter.id === id
      );
      counterCopy.splice(counterIndexToRemove, 1);

      return counterCopy.map(({ id, countValue }) => {
        return {
          id,
          countValue: countValue % 2 !== 0 ? countValue - 1 : countValue,
        };
      });
    });
  }, []);

  const totalSum = counters.reduce(
    (sum, { countValue }) => sum + countValue,
    0
  );


  return (
    <CountersManagerLayout
      counters={counters}
      handleCounterCreate={handleCounterCreate}
      handleReset={handleReset}
      handleCounterIncrement={handleCounterIncrement}
      handleCounterDecrement={handleCounterDecrement}
      handleCounterReset={handleCounterReset}
      handleCounterRemove={handleCounterRemove}
      totalSum={totalSum}
    />
  );
};

export default CountersManagerContainer;
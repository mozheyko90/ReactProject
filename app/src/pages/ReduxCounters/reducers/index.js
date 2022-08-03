import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const defaultState = {
  counters: [],
};

export const countersManagerReducer = handleActions(
  {
    [actions.CREATE_COUNTER]: (state) => {
      const countersCopy = [...state.counters];
      const newCounter = {
        id: uuid(),
        countValue: 0,
      };

      countersCopy.push(newCounter);

      return {
        ...state,
        counters: countersCopy,
      };
    },
    [actions.INCREMENT_COUNTER]: (state, { payload: id }) => {
      const countersCopy = [...state.counters];
      const foundCounter = countersCopy.find((counter) => counter.id === id);

      foundCounter.countValue += 1;

      return {
        counters: countersCopy,
      };
    },
    [actions.DELETE_COUNTER]: (state, { payload: id }) => {
        const countersCopy = [...state.counters];
        const counterIndexToRemove = countersCopy.findIndex((counter) => counter.id === id);

        countersCopy.splice(counterIndexToRemove, 1);
        return {
            counters: countersCopy,
        };
  },
},
  defaultState
);


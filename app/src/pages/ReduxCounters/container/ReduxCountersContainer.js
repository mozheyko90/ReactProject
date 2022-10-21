import { useDispatch, useSelector } from "react-redux";

import Counter from "../../Counter/components/Counter";

import { CREATE_COUNTER, DELETE_COUNTER, INCREMENT_COUNTER, REMOVE_ALL_COUNTERS, DECREMENT_COUNTER } from "../actions";
import {countersSelector} from "../selectors";


const ReduxCountersContainer = () => {
    const dispatch = useDispatch();

const counters = useSelector(countersSelector);


const handleCounterCreate = () => {
dispatch(CREATE_COUNTER())
};

const handleCounterIncrement = (id) => {
    dispatch(INCREMENT_COUNTER(id));
};

const handleCounterRemove = (id) => {
    dispatch(DELETE_COUNTER(id))
};

const handleCounterDecrement = (id) => {
    dispatch(DECREMENT_COUNTER(id));
};

const handleRemoveAll = () => {
    dispatch(REMOVE_ALL_COUNTERS());
};

    return (
    <>
    <button onClick={handleCounterCreate}>Create Counter</button>
    <button onClick={handleRemoveAll}>Delete All</button>

    <div>
        {counters.map(({ id, countValue}) => (
            <Counter 
            countValue={countValue} 
            onIncrement={handleCounterIncrement}
            onRemove={handleCounterRemove} 
            onDecrement={handleCounterDecrement}
            key={id} 
            id={id}
            />
        ))}
    </div>
    </>
    );
};

export default ReduxCountersContainer;
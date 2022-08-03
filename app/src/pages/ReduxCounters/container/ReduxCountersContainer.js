import { useDispatch, useSelector } from "react-redux";
import { CREATE_COUNTER, DELETE_COUNTER } from "../actions";
import Counter from "../../Counter/components/Counter";

const ReduxCountersContainer = () => {
    const dispatch = useDispatch();
const counters = useSelector((state) => state.countersManager.counters);

const handleCounterCreate = () => {
dispatch(CREATE_COUNTER())
};

const handleCounterRemove = (id) => {
    dispatch(DELETE_COUNTER(id))
};

    return (
    <>
    <button onClick={handleCounterCreate}>Create Counter</button>

    <div>
        {counters.map(({ id, countValue}) => (
            <Counter countValue={countValue}  onRemove={handleCounterRemove} key={id} id={id}/>
        ))}
    </div>
    </>
    );
};

export default ReduxCountersContainer;
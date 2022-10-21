import { Routes, Route } from "react-router-dom";
import { ROUTE_NAMES } from "../router/routeNames";
import CounterContainer from "../pages/Counter/containers/CounterContaiiner";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";
import Home from "../pages/Home/index";
import ListsContainer from "../pages/Lists/containers/ListsContainer";
import CountersManagerContainer from "../pages/CountersManager/containers/CounterManagerContainer";
import ReduxCountersContainer from "../pages/ReduxCounters/container/ReduxCountersContainer";
import TodosContainer from "../pages/TodoList/containers/TodosContainer";
import FormContainer from "../pages/Forms/containers/FormContainer";
import DataFetchingContainer from "../pages/DataFetching/containers/DataFetchingContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_COUNTER}
        element={<FunctionalCounterContainer />}
      />
      <Route path={ROUTE_NAMES.LISTS} element={<ListsContainer />} />
      <Route
        path={ROUTE_NAMES.COUNTERS_MANAGER}
        element={<CountersManagerContainer />}
      />
      <Route path={ROUTE_NAMES.FORMS} element={<FormContainer/>}/>
      <Route path={ROUTE_NAMES.REDUX_COUNTERS} element={<ReduxCountersContainer />} />
      <Route path={ROUTE_NAMES.TODO_LIST} element={<TodosContainer />} />
      <Route path={ROUTE_NAMES.DATA_FETCH} element ={<DataFetchingContainer/>} />
    </Routes>
  );
};

export default Router;
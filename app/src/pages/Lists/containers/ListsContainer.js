import { useCallback, useState } from "react";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash/cloneDeep";

import ListsLayout from "../components/ListLayuot";

const ListsContainer = () => {
  const [users, setUsers] = useState([]);

  const handleUserDelete = useCallback((id) => {
    setUsers((state) => {
      const usersCopy = cloneDeep(state); 

      const itemIndexToRemove = usersCopy.findIndex((user) => user.id === id);
      usersCopy.splice(itemIndexToRemove, 1);
      return usersCopy;
    });
  }, []);

  const handleUsersCreate = useCallback(() => {
    setUsers((state) => {
      const usersCopy = cloneDeep(state);

      const id = uuid();

      const newUser = {
        id,
        name: `User-${id}`,
        age: 18,
      };

      usersCopy.push(newUser);

      return usersCopy;
    });
  }, []);

  const handleAgeSet = useCallback((id) => {
    setUsers((state) => {
      const stateCopy = [...state];

      const userToUpdate = stateCopy.find((user) => user.id === id);

      userToUpdate.age = 100;

      return stateCopy;
    });
  }, []);

  return (
    <ListsLayout
      users={users}
      handleUserDelete={handleUserDelete}
      handleUsersCreate={handleUsersCreate}
      handleAgeSet={handleAgeSet}
    />
  );
};

export default ListsContainer;
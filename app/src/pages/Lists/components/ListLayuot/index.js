import PropTypes from "prop-types";

import User from "./user";

const ListsLayout = ({
  users,
  handleUserDelete,
  handleUsersCreate,
  handleAgeSet,
}) => {
  return (
    <div>
      <h1>Lists</h1>
      <button onClick={handleUsersCreate}>Create User</button>
      <div>
        {users.map((user) => (
          <User
            onDelete={handleUserDelete}
            onAgeSet={handleAgeSet}
            id={user.id}
            key={user.id}
            name={user.name}
            age={user.age}
          />
        ))}
      </div>
    </div>
  );
};
ListsLayout.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
    })
  ),
};

export default ListsLayout;
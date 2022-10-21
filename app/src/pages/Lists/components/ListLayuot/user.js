import { memo } from "react";

import styles from "./styles.module.scss";
const User = ({ name, age, onDelete, id, onAgeSet }) => {
  return (
    <div className={styles.users}>
      <p>Name: {name}</p>
      <p> Age: {age}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onAgeSet(id)}>Set 100 years</button>
    </div>
  );
};

export default memo(User);
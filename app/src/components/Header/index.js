import { ROUTE_NAMES } from "../../router/routeNames";
import { Link } from "react-router-dom";
import capitalize from "lodash/capitalize";
import starCase from "lodash/startCase";

import styles from "./index.module.scss";
import startCase from "lodash/startCase";

const Header = () => {
  return (
    <div>
      {Object.entries(ROUTE_NAMES).map(([pageName, path]) => (
        <Link className={styles.menuItem} key={path} to={path}>
          {startCase(capitalize(pageName))}
        </Link>
      ))}
    </div>
  );
};

export default Header;
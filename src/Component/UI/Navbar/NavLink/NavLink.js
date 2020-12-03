import styles from "./NavLink.module.css";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <Link
      onClick={() => {
        if (props.setHide) {
          props.setHide(true);
        }
      }}
      to={props.link}
      className={styles.NavLink}
    >
      {props.children}
    </Link>
  );
};

export default NavLink;

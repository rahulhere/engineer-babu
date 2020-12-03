import styles from "./Navbar.module.css";
import NavLink from "./NavLink/NavLink";

const Navbar = (props) => {
  return (
    <nav className={styles.Navbar}>
      <ul>
        <NavLink setHide={props.setHide} link="/">
          HOME
        </NavLink>
        <NavLink setHide={props.setHide} link="/another-page">
          HOW WE WORK
        </NavLink>
        <NavLink setHide={props.setHide} link="/another-page">
          CUSTOMERS
        </NavLink>
        <NavLink setHide={props.setHide} link="/another-page">
          SERVICES <i className={styles.arrowDown}></i>
        </NavLink>
        <NavLink setHide={props.setHide} link="/another-page">
          BLOG
        </NavLink>
        <NavLink setHide={props.setHide} link="/another-page">
          REVIEWS
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;

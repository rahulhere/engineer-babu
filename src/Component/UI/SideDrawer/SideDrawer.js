import styles from "./SideDrawer.module.css";
import Navbar from "./../Navbar/Navbar";
import Hamburger from "./../../UI/Hamburger/Hamburger";

const SideDrawer = (props) => {
  return (
    <div
      className={[styles.SideDrawer, props.hide ? styles.hide : null].join(" ")}
    >
      <Hamburger
        classes={styles.hamburger}
        hideSideDrawer={props.hide}
        setHideSideDrawer={props.setHide}
      />
      <Navbar setHide={props.setHide} />
      <div className={styles.expertTalk}>talk to an expert</div>
    </div>
  );
};

export default SideDrawer;

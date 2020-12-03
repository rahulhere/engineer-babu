import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Navbar from "./../UI/Navbar/Navbar";
import logo from "./../../Assets/svgs/logo.svg";
import Hamburger from "../UI/Hamburger/Hamburger";

const Header = (props) => {
  let [isScrolled, setScrolled] = useState(false);

  let pageYOffset = window.pageYOffset;
  const onScroll = () => {
    pageYOffset = window.pageYOffset;
    if (pageYOffset < 10 && isScrolled !== false) {
      setScrolled(false);
    } else if (pageYOffset >= 10 && isScrolled !== true) {
      setScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <div
      className={[styles.Header, isScrolled ? styles.scrolled : null].join(" ")}
    >
      <img src={logo} alt="EB Logo" />
      <div className={styles.headerBodyResponsive}>
        <Navbar />
        <div className={styles.expertTalk}>talk to an expert</div>
      </div>
      <Hamburger
        classes={styles.hamburger}
        hideSideDrawer={props.hide}
        setHideSideDrawer={props.setHide}
      />
    </div>
  );
};

export default Header;

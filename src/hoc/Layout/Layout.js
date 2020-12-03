import { useState } from "react";
import Header from "../../Component/Header/Header";
import Aux from "./../Auxilliary/Auxilliary";
import { useMediaQuery } from "react-responsive";
import SideDrawer from "./../../Component/UI/SideDrawer/SideDrawer";
import Footer from "../../Component/Footer/Footer";

const Layout = (props) => {
  const [hide, _setHide] = useState(true);

  const setHide = (bool) => {
    _setHide(bool);
  };

  const isTabletMobile = useMediaQuery({ query: "(max-width: 990px)" });
  if (!isTabletMobile && hide === false) {
    setHide(true);
  }

  return (
    <Aux>
      <Header hide={hide} setHide={setHide} />
      <SideDrawer hide={hide} setHide={setHide} />
      {props.children}
      <Footer />
    </Aux>
  );
};

export default Layout;

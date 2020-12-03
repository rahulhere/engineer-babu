import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Loader from "./Component/UI/Loader/Loader";
import Home from "./Component/Home/Home";
import AnotherPage from "./Component/AnotherPage/AnotherPage";

function App() {
  const [loader, setLoader] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (loader === null) {
      setLoader(<Loader />);
    }
    setTimeout(() => {
      // if (loader !== null) {
      //   setLoader(null);
      // }
      setLoader(null);
      console.log("here in timeoout", loader);
    }, 2000);
    // eslint-disable-next-line
  }, [location]);

  return (
    <div className="App">
      <Layout>
        {loader}

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <AnotherPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

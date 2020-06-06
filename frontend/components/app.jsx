import React from "react";
import { Route, Switch } from "react-router-dom";
// import Splash from "./splash";
import ModalContainer from "./modal/modal";
import NavBarContainer from "./navbar/navbar_container";

const App = () => {
  return (
    <div>
      <ModalContainer />
      <NavBarContainer />
      <div>hi</div>
      <Switch>
        {/* <Route exact path="/" component={Splash} /> */}
      </Switch>
    </div>
  )
};

export default App;
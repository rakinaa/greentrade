import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalContainer from "./modal/modal";
import NavBarContainer from "./navbar/navbar_container";
import Splash from "./splash/splash";

const App = () => {
  return (
    <div>
      <ModalContainer />
      <NavBarContainer />
      <div>hi</div>
      <Switch>
        <Route exact path="/" component={Splash} />
      </Switch>
    </div>
  )
};

export default App;
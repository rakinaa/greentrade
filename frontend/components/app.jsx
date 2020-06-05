import React from "react";
import { Route, Switch } from "react-router-dom";
// import Splash from "./splash";
import ModalContainer from "./modal/modal";
// import NavBar from "./navbar/navbar";

const App = () => {
  return (
    <div>
      <ModalContainer />
      {/* <NavBar /> */}
      <Switch>
        {/* <Route exact path="/" component={Splash} /> */}
      </Switch>
    </div>
  )
};

export default App;
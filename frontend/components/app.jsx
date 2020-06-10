import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalContainer from "./modal/modal";
import Splash from "./splash/splash";
import LoginPageContainer from "./session_form/login_page_container";

const App = () => {
  return (
    <div>
      <ModalContainer />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={LoginPageContainer} />
      </Switch>
    </div>
  )
};

export default App;
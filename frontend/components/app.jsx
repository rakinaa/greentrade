import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalContainer from "./modal/modal";
import Splash from "./splash/splash";
import LoginPageContainer from "./session_form/login_page_container";
import SignUpPageContainer from "./session_form/sign_up_page_container";

const App = () => {
  return (
    <div>
      <ModalContainer />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={LoginPageContainer} />
        <Route exact path="/signup" component={SignUpPageContainer} />
      </Switch>
    </div>
  )
};

export default App;
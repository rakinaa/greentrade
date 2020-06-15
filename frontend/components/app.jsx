import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalContainer from "./modal/modal";
import Splash from "./splash/splash";
import TickerShow from "./ticker_show/ticker_show";
import LoginPage from "./session_form/login_page";
import SignUpPage from "./session_form/sign_up_page";

const App = () => {
  return (
    <div>
      <ModalContainer />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/show/:sym" component={TickerShow} />
      </Switch>
    </div>
  );
};

export default App;

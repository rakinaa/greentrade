import React from "react";
import { Route, Switch } from "react-router-dom";
import Splash from "./splash/splash";
import TickerShow from "./ticker_show/ticker_show";
import LoginPage from "./session_form/login_page";
import SignUpPage from "./session_form/sign_up_page";
import { ProtectedRoute, AuthRoute } from "../util/route_util";

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={LoginPage} />
        <AuthRoute exact path="/signup" component={SignUpPage} />
        <ProtectedRoute exact path="/show/:sym" component={TickerShow} />
      </Switch>
    </div>
  );
};

export default App;

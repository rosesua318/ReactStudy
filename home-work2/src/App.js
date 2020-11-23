import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./NavbarComponent";
import NoticeBoard from "./NoticeboardTemplate";
import Login from "./LoginTemplate";
import Home from "./HomeTemplate";
import Signup from "./SignupTemplate";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/signup" component={Signup} />
        <Route path="/noticeboard" component={NoticeBoard} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

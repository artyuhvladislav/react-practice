import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./Component/Dialogs/Dialogs";
import Friends from "./Component/Friends/Friends";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.navbarPage} />
      <Friends state={props.state.friendsPage} />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              state={props.state.dialogsPage}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              dispatch={props.dispatch}
            />
          )}
        />
      </div>
    </div>
  );
};
export default App;

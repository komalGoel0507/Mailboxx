import React, { Component } from "react";
//import { Route, BrowserRouter, Switch } from "react-router-dom";
import firebase from "./firebase";
//import FirstPageRun from "./Components/FirstPageRun";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import FirstPageRun from "./Components/FirstPageRun";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div>{this.state.user ? <FirstPageRun /> : <LoginPage />}</div>;
  }
}

export default App;

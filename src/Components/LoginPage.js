import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { red300, red600 } from "material-ui/styles/colors";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import firebase from "../firebase";
import Subheader from "material-ui/Subheader";
import Avatar from "material-ui/Avatar";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      mailId: "",
      password: ""
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  login() {
    const mailId = document.querySelector("#mailId").value;
    const password = document.querySelector("#password").value;
    firebase
      .auth()
      .signInWithEmailAndPassword(mailId, password)
      .then(u => {
        console.log("Succesfully Logged in");
      })
      .catch(err => {
        console.log("Error !!" + err.toString());
      });
  }
  signUp() {
    const mailId = document.querySelector("#mailId").value;
    const password = document.querySelector("#password").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(mailId, password)
      .then(u => {
        console.log("Succesfully Signed in");
      })
      .catch(err => {
        console.log("Error !!" + err.toString());
      });
  }
  render() {
    // const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            style={{
              backgroundColor: "#E53935",
              marginTop: "5%"
            }}
            title={<span style={styles.title}>MailBox</span>}
          />
          <div className="DesignLoginPage">
            <form>
              <h1>
                Sign in
                <Avatar color={red300} backgroundColor={red600} size={30}>
                  M
                </Avatar>
              </h1>
              <hr />
              <Subheader>Continue to MailBox..</Subheader>

              <TextField
                id="mailId"
                hintText=" Enter Your Mail ID"
                hintStyle={{ color: "black" }}
                floatingLabelText="mailId"
                inputStyle={{
                  color: "black",
                  width: "100%",
                  padding: "2px 5px",
                  margin: "4px 0",
                  display: "inline-block",
                  border: "1px solid #ccc",
                  boxSizing: "border-box"
                }}
                floatingLabelStyle={{ color: "black" }}
                onChange={this.handleChange}
              />
              <hr />
              <TextField
                id="password"
                hintText=" Enter Password"
                hintStyle={{ color: "black" }}
                floatingLabelText="password"
                inputStyle={{
                  color: "black",
                  width: "100%",
                  padding: "2px 5px",
                  margin: "4px 0",
                  display: "inline-block",
                  border: "1px solid #ccc",
                  boxSizing: "border-box"
                }}
                floatingLabelStyle={{ color: "black" }}
                onChange={this.handleChange}
              />
              <hr />

              <RaisedButton
                label="Login"
                Primary={true}
                styles={styles.button}
                onClick={this.login}
              />

              <RaisedButton
                label="Sign-Up"
                Primary={true}
                styles={styles.button}
                onClick={this.signUp}
              />
            </form>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    width: "100%",
    padding: "2px 5px",
    margin: "4px 0"
  }
};

export default LoginPage;

/*import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ActionInfo from "material-ui/svg-icons/action/info";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";
import Toggle from "material-ui/Toggle";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import NavigationClose from "material-ui/svg-icons/navigation/close";

class Login extends Component {
  static muiName = "FlatButton";

  render() {
    return <FlatButton {...this.props} label="Login" />;
  }
}

const Logged = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    targetOrigin={{ horizontal: "right", vertical: "top" }}
    anchorOrigin={{ horizontal: "right", vertical: "top" }}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = "IconMenu";

class Firstpage extends Component {
  state = {
    logged: true
  };

  handleChange = (event, logged) => {
    this.setState({ logged: logged });
  };
  render() {
    return (
      <div>
        <Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{ margin: 20 }}
        />
        <AppBar
          title="MailBox"
          style={{ backgroundColor: "#E53935" }}
          iconElementLeft={
            <IconButton>
              <NavigationClose />
            </IconButton>
          }
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
        />
        <BrowserRouter>
          <MuiThemeProvider>
            <React.Fragment>
              <div className="FirstPage_desgin">
                <AppBar
                  title="MailBox"
                  style={{ backgroundColor: "#E53935" }}
                />
                <br />
                {<ContentInbox />}
                <RaisedButton
                  fullWidth={true}
                  label="Inbox"
                  styles={styles.button}
                  onClick={() => this.props.history.push("/inbox")}
                  Primary={true}
                />

                {<ActionInfo />}
                <RaisedButton
                  fullWidth={true}
                  label="Deleted"
                  styles={styles.button}
                  onClick={() => this.props.history.push("/deleted")}
                  Primary={true}
                />
                <br />
                {<ActionInfo />}
                <RaisedButton
                  label="Full width"
                  fullWidth={true}
                  label="Spam"
                  Primary={true}
                  styles={styles.button}
                />
                <hr />
              </div>
            </React.Fragment>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}
const styles = {
  button: {
    margin: 1500
  }
};

export default Firstpage;
*/

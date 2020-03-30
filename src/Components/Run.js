import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import Avatar from "material-ui/Avatar";
import ActionInfo from "material-ui/svg-icons/action/info";
import AppBar from "material-ui/AppBar";
import { red300 } from "material-ui/styles/colors";
import { List, ListItem } from "material-ui/List";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import Drawer from "material-ui/Drawer";
import Subheader from "material-ui/Subheader";
import CommunicationCall from "material-ui/svg-icons/communication/call";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import { red600 } from "material-ui/styles/colors";
import CommunicationEmail from "material-ui/svg-icons/communication/email";
import firebase from "../firebase";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import Badge from "material-ui/Badge";

function handleClick() {
  alert("You are already Logged in to your MailBox");
}

export class Run extends Component {
  constructor(props) {
    super(props);
    this.Logout = this.Logout.bind(this);
    this.state = { open: false };
  }
  Logout() {
    firebase.auth().signOut();
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar
              style={{
                backgroundColor: "#E53935",
                display: "flex ",
                position: "sticky",
                top: "0",
                left: "0"
              }}
              title={<span style={styles.title}>MailBox</span>}
              onTitleClick={handleClick}
              iconElementRight={
                <RaisedButton label="MenuBar" onClick={this.handleToggle} />
              }
              iconElementLeft={
                <Badge
                  badgeContent={4}
                  secondary={true}
                  badgeStyle={{ top: 12, right: 12 }}
                >
                  <IconButton
                    tooltip="Notifications"
                    onClick={() => this.props.history.push("/inbox")}
                  >
                    <NotificationsIcon />
                  </IconButton>
                </Badge>
              }
            />
            <div className="FirstPage_desgin">
              <div className="logged">
                <h1>Welcome to your MailBox </h1>
              </div>
              <Drawer open={this.state.open}>
                <AppBar
                  style={{
                    backgroundColor: "#E53935",
                    color: "white",
                    height: "13%",
                    margin: "0%",
                    display: "flex ",
                    position: "sticky",
                    top: "0",
                    left: "0"
                  }}
                  iconElementLeft={
                    <Avatar
                      icon={<ActionAssignment />}
                      backgroundColor={red300}
                    />
                  }
                  title={<span style={styles.title}>MailBox</span>}
                />
                <hr />
                <List>
                  <ListItem>
                    {<ContentInbox />}
                    <li onClick={() => this.props.history.push("/inbox")}>
                      Inbox
                    </li>
                  </ListItem>
                  <hr />
                  <Subheader styles="font-weight: bold">ALL LABELS</Subheader>

                  <ListItem>
                    {<ActionInfo />}
                    <li onClick={() => this.props.history.push("/deleted")}>
                      Deleted
                    </li>
                  </ListItem>

                  <br />
                  <ListItem>
                    {<ActionInfo />}
                    <li
                      fullWidth={true}
                      onClick={() => this.props.history.push("/spam")}
                      Primary={true}
                      styles={styles.button}
                    >
                      Spam
                    </li>
                  </ListItem>
                  <ListItem>
                    {<ActionInfo />}
                    <li
                      fullWidth={true}
                      onClick={() => this.props.history.push("/draft")}
                      Primary={true}
                      styles={styles.button}
                    >
                      Draft
                    </li>
                  </ListItem>

                  <ListItem
                    insetChildren={true}
                    leftIcon={<CommunicationCall color={red600} />}
                    rightIcon={<CommunicationChatBubble />}
                    primaryText="(982) 600 - 9863"
                    secondaryText="Work"
                  />
                </List>
                <hr />
                <List>
                  <ListItem
                    leftIcon={<CommunicationEmail color={red600} />}
                    primaryText="Komalgoel.com"
                    secondaryText="Personal"
                  />
                  <ListItem
                    insetChildren={true}
                    leftIcon={<CommunicationEmail color={red600} />}
                    primaryText="SmileBots.com"
                    secondaryText="Work"
                  />
                  <ListItem>
                    <li onClick={this.Logout}>Logout</li>
                  </ListItem>
                </List>
                <hr />
              </Drawer>
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
const styles = {
  button: {
    margin: 1500
  },
  title: {
    cursor: "pointer"
  }
};

export default Run;

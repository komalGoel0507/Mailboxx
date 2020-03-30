import React, { Component } from "react";
import Subheader from "material-ui/Subheader";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import ActionInfo from "material-ui/svg-icons/action/info";
import PostData from "../inbox1.json";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import Avatar from "material-ui/Avatar";
import RaisedButton from "material-ui/RaisedButton";
import { red300, red600 } from "material-ui/styles/colors";
import CommunicationEmail from "material-ui/svg-icons/communication/email";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import CommunicationCall from "material-ui/svg-icons/communication/call";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import { List, ListItem } from "material-ui/List";
import Drawer from "material-ui/Drawer";
import firebase from "../firebase";
function handleClick() {
  alert("You are already Logged in to your MailBox");
}

export class Deleted extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  Logout() {
    firebase.auth().signOut();
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            style={{ backgroundColor: "#E53935" }}
            title={<span style={styles.title}>MailBox</span>}
            onTitleClick={handleClick}
            iconElementRight={
              <RaisedButton label="MenuBar" onClick={this.handleToggle} />
            }
            iconElementLeft={
              <Avatar icon={<ActionAssignment />} backgroundColor={red300} />
            }
          />
          <Subheader>All deleted Mails are here</Subheader>
          <div className="DesignDelete">
            {PostData.map((postDetail, index) => {
              return (
                <div>
                  <p>{<ActionInfo />} you have deleted this mail</p>
                </div>
              );
            })}
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
                <Avatar icon={<ActionAssignment />} backgroundColor={red300} />
              }
              title={<span style={styles.title}>MailBox</span>}
            />
            <hr />
            <ListItem>
              {<ActionInfo />}
              <li onClick={() => this.props.history.push("/")}>Home</li>
            </ListItem>

            <ListItem>
              {<ContentInbox />}
              <li onClick={() => this.props.history.push("/inbox")}>Inbox</li>
            </ListItem>

            <hr />
            <Subheader styles="font-weight: bold">ALL LABELS</Subheader>
            <List>
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
                <li onClick={() => this.props.history.push("/draft")}>Draft</li>
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
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const styles = {
  button: {
    margin: 1500
  }
};
export default Deleted;

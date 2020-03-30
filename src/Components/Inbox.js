import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Avatar from "material-ui/Avatar";
import AppBar from "material-ui/AppBar";
import { black, red600, red300 } from "material-ui/styles/colors";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import CommunicationEmail from "material-ui/svg-icons/communication/email";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import CommunicationCall from "material-ui/svg-icons/communication/call";
import CommunicationChatBubble from "material-ui/svg-icons/communication/chat-bubble";
import Drawer from "material-ui/Drawer";
import { List, ListItem } from "material-ui/List";
import ActionInfo from "material-ui/svg-icons/action/info";
import Subheader from "material-ui/Subheader";
import PostData from "../inbox1.json";
import firebase from "../firebase";

function handleClick() {
  alert("You are already Logged in to your MailBox");
}

export class Inbox extends Component {
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
              <Avatar icon={<ActionAssignment />} backgroundColor={red300} />
            }
          />

          <Subheader styles="font-weight: bold">Recent Mails</Subheader>
          <div>
            {PostData.map((postDetail, index) => {
              return (
                <div className="DesignInbox">
                  <List>
                    <ListItem
                      leftAvatar={
                        <Avatar
                          icon={<ActionAssignment />}
                          backgroundColor={red600}
                        />
                      }
                      primaryText={
                        <span style={{ color: black }}>
                          <hr />
                          <h1> From : {postDetail.from}</h1>
                          <hr />
                          <RaisedButton
                            fullWidth={true}
                            onClick={() => this.props.history.push("/mail")}
                            label="Open "
                            Primary={true}
                            styles={styles.button}
                          />
                        </span>
                      }
                    />
                  </List>
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
            <hr /> {<ContentInbox />}
            <RaisedButton
              fullWidth={true}
              label="Inbox"
              styles={styles.button}
              onClick={() => this.props.history.push("/inbox")}
              Primary={true}
            />
            <hr />
            <Subheader styles="font-weight: bold">ALL LABELS</Subheader>
            <List>
              <ListItem>
                {<ActionInfo />}
                <RaisedButton
                  fullWidth={true}
                  label="Deleted"
                  styles={styles.button}
                  onClick={() => this.props.history.push("/deleted")}
                  Primary={true}
                />
              </ListItem>

              <br />
              <ListItem>
                {<ActionInfo />}
                <RaisedButton
                  label="Full width"
                  fullWidth={true}
                  label="Spam"
                  onClick={() => this.props.history.push("/spam")}
                  Primary={true}
                  styles={styles.button}
                />
              </ListItem>
              <ListItem>
                {<ActionInfo />}
                <RaisedButton
                  fullWidth={true}
                  label="Draft"
                  onClick={() => this.props.history.push("/draft")}
                  Primary={true}
                  styles={styles.button}
                />
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
                <RaisedButton label="Logout" onClick={this.Logout} />
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
  },
  title: {
    cursor: "pointer"
  }
};
export default Inbox;

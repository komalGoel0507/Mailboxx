import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import { List, ListItem } from "material-ui/List";
import { black, red600, red300 } from "material-ui/styles/colors";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import Avatar from "material-ui/Avatar";
import ActionInfo from "material-ui/svg-icons/action/info";
import PostData from "../inbox1.json";
function handleClick() {
  alert("You are already Logged in to your MailBox");
}

export class mails extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
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
                left: "0",
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
                            {<ActionInfo />}
                            <RaisedButton
                              label="Delete"
                              onClick={() =>
                                this.props.history.push("/deleted")
                              }
                              fullWidth={true}
                              Primary={true}
                              styles={styles.button}
                              insetChildren={true}
                            />
                            {<ActionInfo />}
                            <RaisedButton
                              label="Spam"
                              onClick={() => this.props.history.push("/spam")}
                              fullWidth={true}
                              Primary={true}
                              styles={styles.button}
                              insetChildren={true}
                            />
                            <div className="DesignMail">
                              <hr />
                              <h1>
                                <Avatar
                                  icon={<ActionAssignment />}
                                  backgroundColor={red300}
                                />
                                From: {postDetail.from}
                              </h1>
                              <hr />
                              <h2>
                                {
                                  <Avatar
                                    icon={<ContentInbox />}
                                    backgroundColor={red300}
                                  />
                                }
                                To: {postDetail.to}
                              </h2>
                              <hr />
                              <h3>
                                <h1>Subject:</h1>
                                {postDetail.subject}
                              </h3>
                              <hr />
                              <p>
                                <h1>Description:</h1>
                                {postDetail.description}
                              </p>
                              <hr />
                              <p>{postDetail.logo}</p>
                              <hr />
                            </div>
                          </span>
                        }
                        insetChildren={true}
                      />
                    </List>
                  </div>
                );
              })}
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
export default mails;

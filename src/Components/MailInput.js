import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import firebase from "../firebase";
import RaisedButton from "material-ui/RaisedButton";
import { black, red600 } from "material-ui/styles/colors";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import Avatar from "material-ui/Avatar";
import { List, ListItem } from "material-ui/List";
export const MailInput = ({ Fmsg }) => {
  const [to, setTo] = React.useState(Fmsg.to);
  const onUpdateFrom = () => {
    const db = firebase.firestore();
    db.collection("Maildata")
      .doc("id")
      .set({ ...Fmsg, to });
  };
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("Maildata")
      .doc(Fmsg.id)
      .delete();
  };

  return (
    <MuiThemeProvider>
      <div className="DesignMail">
        <List>
          <ListItem
            leftAvatar={
              <Avatar icon={<ActionAssignment />} backgroundColor={red600} />
            }
            primaryText={
              <span style={{ color: black }}>
                <hr />
                <h1>To :</h1>
                <hr />
                <input
                  value={to}
                  onChange={e => {
                    setTo(e.target.value);
                  }}
                />
                <hr />
              </span>
            }
          />

          <RaisedButton fullWidth={true} onClick={onUpdateFrom}>
            update
          </RaisedButton>
          <hr />
          <RaisedButton fullWidth={true} onClick={onDelete}>
            delete
          </RaisedButton>
        </List>
      </div>
    </MuiThemeProvider>
  );
};
export default MailInput;

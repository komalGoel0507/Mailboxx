import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { black, red600 } from "material-ui/styles/colors";
import ActionAssignment from "material-ui/svg-icons/action/assignment";
import Avatar from "material-ui/Avatar";
import firebase from "../firebase";
import MailInput from "./MailInput";
import { ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";

function Datalinking() {
  const [Maildata, setMaildata] = React.useState([]);
  const [NewMailFrom, setNewMailFrom] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Maildata").onSnapshot(function(data) {
        setMaildata(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });
    };
    fetchData();
  }, []);
  const onCreateFrom = () => {
    const db = firebase.firestore();
    db.collection("Maildata").add({ to: NewMailFrom });
  };
  return (
    <MuiThemeProvider>
      <Subheader styles="font-weight: bold">Recent Drafts</Subheader>
      <div className="DesignMail">
        <ul>
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
                  value={NewMailFrom}
                  onChange={e => setNewMailFrom(e.target.value)}
                />
                <RaisedButton onClick={onCreateFrom}>Enter</RaisedButton>
                {Maildata.map(Fmsg => (
                  <li key={Fmsg.to}>
                    <MailInput Fmsg={Fmsg} />
                  </li>
                ))}
                <hr />
              </span>
            }
          />
        </ul>
      </div>
    </MuiThemeProvider>
  );
}
export default Datalinking;

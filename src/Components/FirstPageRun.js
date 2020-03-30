import React, { Component, Fragment } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Deleted from "./Deleted";
import "./Design.css";
import Run from "./Run";
import Inbox from "./Inbox";
import Spam from "./Spam";
import Mails from "./Mails";
import Draft from "./Draft";

export class FirstPageRun extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <div className="FirstPageRun">
              <Route exact path="/" render={props => <Run {...props} />} />
              <Route path="/inbox" render={props => <Inbox {...props} />} />
              <Route path="/draft" render={props => <Draft {...props} />} />
              <Route path="/deleted" render={props => <Deleted {...props} />} />
              <Route path="/spam" render={props => <Spam {...props} />} />
              <Route path="/mail" render={props => <Mails {...props} />} />
            </div>
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default FirstPageRun;

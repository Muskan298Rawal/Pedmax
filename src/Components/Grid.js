import React from "react";
import Betting from "./Betting";
import Center from "./Center";
import "../App.css";
import List from "./List";
import { Redirect, Route, Switch } from "react-router-dom";
import Sports from "./Sports";
import Live from "./Live";
import SportsLink from "./SportsLink";
import TournamentLink from "./TournamentLink";

function Grid() {
  return (
    <div className="grid-container">
      <div className="item1">
        <List />
      </div>
      <Switch>
        <Route exact path="/home" component={Center} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/livebetting" component={Live} />
        <Route exact path="/sports/:id" component={SportsLink} />
        <Route exact path="/sports/:id/:tou_id" component={TournamentLink} />
        <Route path="/">
          <Redirect to="/home"></Redirect>
        </Route>
      </Switch>
      <div className="item3">
        <Betting />
      </div>
    </div>
  );
}

export default Grid;

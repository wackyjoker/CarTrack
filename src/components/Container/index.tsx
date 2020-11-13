import React from "react";
import CardList from "../CardList/index";
import CardDetail from "../CardDetail/index";
import { Switch, Route } from "react-router-dom";
const Container: React.FC = () => {
  return (
    <div id="container">
      <div id="list">
        <Switch>
          <Route path="/" exact component={CardList} />
          <Route path="/:userid" component={CardDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default Container;

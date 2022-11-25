import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import "./Router.css";

const Home = () => <h1>Home</h1>;
const FAQ = ({match: {params: {id, name}}}) => <h1>FAQ {id} {name}</h1>;
const NotFound = () => <h1>NotFound</h1>;

const Example = withRouter(({location}) => {
    return (
      <div>{location.pathname}</div>
    );
  }
);

export const ExistingRouter = () => (
  <Router>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
      </li>
      <li>
        <NavLink to="/faq" activeClassName="active-link">FAQ</NavLink>
      </li>
    </ul>

    <Example/>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/faq" component={FAQ}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);



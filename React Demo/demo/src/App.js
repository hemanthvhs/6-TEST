import React, { Component } from "react";
// import Demo from "./Demo";
import "./App.css";
import { Route, Switch, Link, NavLink } from "react-router-dom";

const VendingMachine = () => {
  return <h1>From Vending Machine Component</h1>;
};

const Soda = () => {
  return <h1>From Soda Component</h1>;
};

const Chocos = () => {
  return <h1>From Chocos Component</h1>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="currentRoute">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/soda" activeClassName="currentRoute">
                Soda
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/chocos" activeClassName="currentRoute">
                Chocos
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={() => <VendingMachine />} />
          <Route exact path="/soda" component={() => <Soda />} />
          <Route exact path="/chocos" component={() => <Chocos />} />
        </Switch>
      </div>

      // <div className="App">
      //   <h1>Hello World !!!</h1>
      //   <p>React / Javascript</p>
      //   <Demo />
      // </div>
    );
  }
}
export default App;

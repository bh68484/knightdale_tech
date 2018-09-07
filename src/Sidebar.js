import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Sidebar.css";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const K2 = () => (
  <div>
    <p>Kindergarten - 2nd grade links</p>
  </div>
);

const ThirdFifth = () => (
  <div>
    <p>3rd through 5th grade links</p>
  </div>
);

const Sidebar = () => (
  <Router>
    <div className="sidebar">
      <ul className="sidebar content-box">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/K2">K-2nd Grade</Link>
        </li>
        <li>
          <Link to="/ThirdFifth">3rd - 5th Grade</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home} />
      <Route path="/k2" component={K2} />
      <Route path="/ThirdFifth" component={ThirdFifth} />
    </div>
  </Router>
);

export default Sidebar;

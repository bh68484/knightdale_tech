import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <Footer />
      </div>
    );
  }
}

export default App;

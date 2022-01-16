import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Sidebar from "./Sidebar"
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import BasicMap from "./test"

const routing = (
  <Router>
    <div className="main">
      <Header />
      <hr />
      <Sidebar />
      <Content />
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));


import React from "react";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <>
    <div>
      <Navigation />
    </div>

    <Route path="/" exact component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
  </>
);

export default App;

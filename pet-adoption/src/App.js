import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import SearchParams from "./searchParams";
import Details from "./details";

function App() {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;

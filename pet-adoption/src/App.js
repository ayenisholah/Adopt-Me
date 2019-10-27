import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import SearchParams from "./searchParams";
import Details from "./details";
import ThemeContext from "./ThemeHook.jsx";

function App() {
  const themeHook = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

export default App;

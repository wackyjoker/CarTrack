import React from "react";
import "./styles/style.scss";
import Container from "./components/Container";

import Header from "./components/Header";
import { UserProvider } from "./components/Contexts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />
          <Container />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

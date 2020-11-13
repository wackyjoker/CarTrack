import React from "react";
import "./styles/style.scss";
import Container from "./components/Container/index";

import Header from "./components/Header/index";
import { Provider } from "./components/Contexts/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Header />
          <Container />
        </Router>
      </Provider>
    </div>
  );
}

export default App;

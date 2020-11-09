import React from "react";
import "./styles/style.scss";
import List from "./components/List/index";
import { Provider } from "./components/Contexts/index";
function App() {
  return (
    <div className="App">
      <Provider>
        <List />
      </Provider>
    </div>
  );
}

export default App;

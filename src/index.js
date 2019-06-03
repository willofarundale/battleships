import React from "react";
import ReactDOM from "react-dom";

import "./styles/styles.scss";

import BoardContainer from "./components/BoardContainer";

function App() {
  return (
    <div className="App">
      <BoardContainer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import "./App.css";
import BoxList from "./components/BoxList/BoxList";
const App = () => {
  return (
    <div className="App">
      <h1>Custom Box Visualizer</h1>
      <BoxList />
    </div>
  );
};

export default App;

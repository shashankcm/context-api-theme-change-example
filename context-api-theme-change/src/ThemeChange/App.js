import React from "react";
import Card from "./Card";
import Switch from "./Switch";
import { ThemeProvider } from "./ThemeContext";
import "./ThemeChange.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>React Context API</h1>
        <h2>Project Theme Switch</h2>
        <Card />
        <Switch />
      </div>
    </ThemeProvider>
  );
}

export default App;

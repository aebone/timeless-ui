import React from "react";
import Button from "./atoms/button/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>

      <h2>Size</h2>
      <Button text={"Small Button"} size={"small"} style={"basic"} />
      <Button text={"Medium Button"} size={"medium"} style={"basic"} />
      <Button text={"Large Button"} size={"large"} style={"basic"} />

      <h2>Color</h2>
      <Button text={"Basic Button"} size={"medium"} style={"basic"} />
      <Button text={"Primary Button"} size={"medium"} style={"primary"} />
      <Button text={"Success Button"} size={"medium"} style={"success"} />
      <Button text={"Danger Button"} size={"medium"} style={"danger"} />
    </div>
  );
}

export default App;

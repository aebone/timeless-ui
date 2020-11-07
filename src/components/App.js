import React from "react";
import Button from "./buttons/Button";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>

      <h2>Size</h2>
      <Button text={"Small Button"} size={"small"} />
      <Button text={"Medium Button"} />
      <Button text={"Large Button"} size={"large"} />

      <h2>Color</h2>
      <Button text={"Default Button"} />
      <Button text={"Primary Button"} type={"primary"} />
      <Button text={"Success Button"} type={"success"} />
      <Button text={"Danger Button"} type={"danger"} />
    </div>
  );
}

export default App;

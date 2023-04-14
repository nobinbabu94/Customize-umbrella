import React, { useState } from "react";
import ReactDOM, { createRoot } from 'react-dom/client'
import '/Index.css'
import Umberlla from "./Components/Umberlla";


export const App = () => {

  const [bgColor, setBgColor] = useState('#faffd1');

  const changeBgColor = (color) => {
    setBgColor(color);
  };

  return (

    <div className="app" style={{ backgroundColor: bgColor }}>
      <Umberlla changeBgColor={changeBgColor} />
    </div>

  );
};

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)
import React from "react";
import { Parallax } from "react-parallax";
import background from "./assets/images/FondGlobal.png";
import "./styles/root.scss";

function App() {
  return (
    <div className="main">
      <Parallax bgImage={background} strength={1000}>
        <h1>Wildy Gamy</h1>
      </Parallax>
    </div>
  );
}

export default App;

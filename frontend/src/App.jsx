import React from "react";
import { Parallax } from "react-parallax";
import background from "./assets/images/FondGlobal.png";
import "./styles/root.scss";

function App() {
  return (
    <div className="main flex">
      <Parallax bgImage={background} strength={1000}>
        <h1 className="text-red-500">Wildy Gamy</h1>
      </Parallax>
    </div>
  );
}

export default App;

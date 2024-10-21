import { useState } from "react";
import reactLogo from "./assets/react.svg";

import gar from "./assets/gar.png";
import gcr from "./assets/gcr.png";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://cloud.google.com/artifact-registry/docs"
          target="_blank"
        >
          <img src={gar} className="logo" alt="GAR logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://cloud.google.com/run?hl=en" target="_blank">
          <img src={gcr} className="logo react" alt="GCR logo" />
        </a>
      </div>
      <h1>GCP Deployment</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">Made in order to learn the GCP concepts</p>
      <p className="read-the-docs">
        Created by{" "}
        <a href="https://github.com/m-ahmed-anwer" target="_blank">
          Ahmed Anwer
        </a>
      </p>
    </>
  );
}

export default App;

import React from "react";

import "./App.css";
import CandidatesRoute from "./features/candidates/CandidatesRoute";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>Hiting demo app</header>
      <CandidatesRoute />
    </div>
  );
};

export default App;

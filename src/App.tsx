import React from "react";

import "./App.css";
import Screen from "./common/layout/Screen";
import CandidateDetailRoute from "./features/candidates/CandidateDetailRoute";
import CandidateListRoute from "./features/candidates/CandidateListRoute";

const App: React.FC = () => {
  return (
    <Screen>
      <React.Fragment>
        <CandidateListRoute />
        <CandidateDetailRoute candidate={undefined} />
      </React.Fragment>
    </Screen>
  );
};

export default App;

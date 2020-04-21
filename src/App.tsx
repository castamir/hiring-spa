import React from "react";

import "./App.css";
import CandidateListRoute from "./features/candidates/CandidateListRoute";
import CandidateDetailRoute from "./features/candidates/CandidateDetailRoute";
import { CandidateReadDto } from "./domain/candidate";
import Screen from "./common/layout/Screen";

const App: React.FC = () => {
  const [selected, setSelected] = React.useState<CandidateReadDto>();

  return (
    <Screen>
      <React.Fragment>
        <CandidateListRoute onSelect={setSelected} />
        <CandidateDetailRoute candidate={selected} />
      </React.Fragment>
    </Screen>
  );
};

export default App;

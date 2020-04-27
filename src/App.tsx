import React from "react";
import { Switch } from "react-router-dom";

import "./App.css";
import CandidateListRoute from "./features/candidates/CandidateListRoute";
import CandidateDetailRoute from "./features/candidates/CandidateDetailRoute";
import { CandidateReadDto } from "./domain/candidate";
import Screen from "./common/layout/Screen";
import { Route } from "react-router-dom";

const App: React.FC = () => {
  const [selected, setSelected] = React.useState<CandidateReadDto>();

  return (
    <Screen>
      <Switch>
        <Route
          path="/candidate-detail"
          render={() => <CandidateDetailRoute candidate={selected} />}
        />
        <Route
          path="/"
          render={() => (
            <CandidateListRoute
              onSelect={setSelected}
              selectedCandidateId={selected?.id}
            />
          )}
        />
      </Switch>
    </Screen>
  );
};

export default App;

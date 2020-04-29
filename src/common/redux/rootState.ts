import {
  initialState as candidatesInitialState,
  ReducerState as CandidatesState,
} from "../../features/candidates/ducks";

export type RootState = {
  candidates: CandidatesState;
};

export const rootState: RootState = {
  candidates: candidatesInitialState,
};

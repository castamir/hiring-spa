// ACTIONS
import { Action, combineReducers } from "redux";
import { CandidateReadDto } from "../../domain/candidate";

enum ActionTypes {
  FETCH_CANDIDATES_REQUEST = "CANDIDATES/FETCH_CANDIDATES_REQUEST",
  FETCH_CANDIDATES_SUCCESS = "CANDIDATES/FETCH_CANDIDATES_SUCCESS",
  FETCH_CANDIDATES_FAILURE = "CANDIDATES/FETCH_CANDIDATES_FAILURE",
  SELECT_CANDIDATE = "CANDIDATES/SELECT_CANDIDATE",
}

type CustomAction = {
  type: ActionTypes;
  payload: any;
};

export const fetchCandidates = () => ({
  type: ActionTypes.FETCH_CANDIDATES_REQUEST,
  payload: null,
});
export const fetchCandidatesSuccess = (data: CandidateReadDto[]) => ({
  type: ActionTypes.FETCH_CANDIDATES_SUCCESS,
  payload: data,
});
export const fetchCandidatesFailure = (error: string) => ({
  type: ActionTypes.FETCH_CANDIDATES_FAILURE,
  payload: error,
});
export const selectCandidate = (data: CandidateReadDto) => ({
  type: ActionTypes.SELECT_CANDIDATE,
  payload: data,
});

type Actions = {
  [ActionTypes.FETCH_CANDIDATES_REQUEST]: ReturnType<typeof fetchCandidates>;
  [ActionTypes.FETCH_CANDIDATES_SUCCESS]: ReturnType<
    typeof fetchCandidatesSuccess
  >;
  [ActionTypes.FETCH_CANDIDATES_FAILURE]: ReturnType<
    typeof fetchCandidatesFailure
  >;
  [ActionTypes.SELECT_CANDIDATE]: ReturnType<typeof selectCandidate>;
};

// STATE
export type ReducerState = {
  candidateList: CandidateReadDto[];
  candidateListIsLoading: boolean;
  candidateListError: string | null;
  selectedCandidate: CandidateReadDto | null;
};
export const initialState: ReducerState = {
  candidateList: [],
  candidateListIsLoading: false,
  candidateListError: null,
  selectedCandidate: null,
};

type ReduxAction = Action & { payload: any };

// REDUCERS
const candidateListReducer = (
  state: ReducerState["candidateList"] | undefined,
  action: ReduxAction
): ReducerState["candidateList"] => {
  if (state === undefined) {
    return initialState.candidateList;
  }

  switch (action.type) {
    case ActionTypes.FETCH_CANDIDATES_SUCCESS:
      return action.payload;
  }

  return state;
};

const candidateListIsLoadingReducer = (
  state: ReducerState["candidateListIsLoading"] | undefined,
  action: ReduxAction
): ReducerState["candidateListIsLoading"] => {
  if (state === undefined) {
    return initialState.candidateListIsLoading;
  }

  switch (action.type) {
    case ActionTypes.FETCH_CANDIDATES_REQUEST:
      return true;
    case ActionTypes.FETCH_CANDIDATES_SUCCESS:
      return false;
    case ActionTypes.FETCH_CANDIDATES_FAILURE:
      return false;
  }

  return state;
};

const candidateListErrorReducer = (
  state: ReducerState["candidateListError"] | undefined,
  action: Actions[keyof Actions]
): ReducerState["candidateListError"] => {
  if (state === undefined) {
    return initialState.candidateListError;
  }

  switch (action.type) {
    case ActionTypes.FETCH_CANDIDATES_REQUEST:
      return null;
    case ActionTypes.FETCH_CANDIDATES_FAILURE:
      return action.type;
  }

  return state;
};

const selectedCandidateReducer = (
  state: ReducerState["selectedCandidate"] | undefined,
  action: any
): ReducerState["selectedCandidate"] => {
  if (state === undefined) {
    return initialState.selectedCandidate;
  }

  switch (action.type) {
    case ActionTypes.SELECT_CANDIDATE:
      return action.payload;
  }

  return state;
};

export const reducer = combineReducers({
  candidateList: candidateListReducer,
  candidateListIsLoading: candidateListIsLoadingReducer,
  candidateListError: candidateListErrorReducer,
  selectedCandidate: selectedCandidateReducer,
});

// SELECTORS

const selectState = (state: any): ReducerState => state.candidates;
export const selectCandidateList = (state: any) =>
  selectState(state).candidateList;
export const selectCandidateListError = (state: any) =>
  selectState(state).candidateListError;
export const selectCandidateListIsLoading = (state: any) =>
  selectState(state).candidateListIsLoading;
export const selectSelectedCandidate = (state: any) =>
  selectState(state).selectedCandidate;

// SAGAS

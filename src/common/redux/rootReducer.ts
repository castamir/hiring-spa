import { combineReducers } from "redux";

import { reducer as candidatesReducer } from "../../features/candidates/ducks";

export const rootReducer = combineReducers({
  candidates: candidatesReducer,
});

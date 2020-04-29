import { createStore } from "redux";

import { rootReducer } from "./rootReducer";
import { rootState, RootState } from "./rootState";

// @ts-ignore
export const store = createStore<RootState>(rootReducer, rootState);

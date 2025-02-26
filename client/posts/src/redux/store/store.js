import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { thunk } from "redux-thunk";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };

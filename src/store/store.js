import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import { myLogger } from "./middleware/myLogger";
import { deleteCheck } from "./middleware/deleteCheck";
import thunk from "redux-thunk";

export const store = createStore(
  reducers,
  applyMiddleware(thunk, deleteCheck, myLogger)
);

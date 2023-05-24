import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import { myLogger } from "./middleware/myLogger";
import { deleteCheck } from "./middleware/deleteCheck";

export const store = createStore(
  reducers,
  applyMiddleware(deleteCheck, myLogger)
);

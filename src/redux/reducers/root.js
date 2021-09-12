import { combineReducers } from "redux";
import { detailReducer } from "./detailReducer";
import { gamesReducer } from "./gamesReducer";

export const rootReducer = combineReducers({
  //only job is to combine the reducers for the store
  games: gamesReducer,
  details: detailReducer,
});

import { createStore, applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/root";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    //can take in only two arguments
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
    );
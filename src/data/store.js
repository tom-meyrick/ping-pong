import { createStore, compose } from "redux";
import initialState from "./initial";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState);
//Render

export default store;

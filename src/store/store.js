import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducers/index"
import logger from "redux-logger";

export const myStore = createStore(reducer, applyMiddleware(logger)); //kendi storeunuzu create ediniz. 
//projenin amacı buyduuu! middleWare ekedik...
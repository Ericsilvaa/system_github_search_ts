import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// config connection
import rootSaga from "./sagas";
import rootReducer from "./root-reducer";

// init midlleware
const sagaMiddleware = createSagaMiddleware();

// config store
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

// start
sagaMiddleware.run(rootSaga);


export default store;
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// config connection
import rootSaga from "./sagas.ts";
import { rootReducer } from "./root-reducer";

// init midlleware
const sagaMiddleware = createSagaMiddleware();

// config store
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

// start
sagaMiddleware.run(rootSaga);



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;

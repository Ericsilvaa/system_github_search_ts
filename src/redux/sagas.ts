import { all } from "redux-saga/effects";

import userSaga from "./user/saga";

export default function* rootSaga(){
  yield all([userSaga]);
}

// export default function* rootSaga(): Generator<any> {
//   return yield all([userSaga])
// }

// import {all, fork, call, put, takeLatest} from 'redux-saga/effects'
import {all , takeLatest} from 'redux-saga/effects'
// import {onLoadUserSuccess, onLoadUserFailure, onLogoutUser} from './slice'


function* onGetLoadUserLocalStorage() {
  // try {
    // ir até o localStorage para ver se existe algum usuario .. se não tiver permanecer em login
    // pegar pelo token
    
    // const response = yield call()
    // yield put(onLoadUserSuccess(response.data))
  // } catch (error) {
  //   yield put(onLoadUserFailure(error))
  // }
}

function* onLogoutUserLocalStorage() {
  localStorage.removeItem('token')
  // yield put(onLogoutUser())
}




export default all([
  // pode ser um FORK() -> aceita uma função
  takeLatest('loadUser/onLoadUser', onGetLoadUserLocalStorage),
  takeLatest('loadUser/onLogoutUser', onLogoutUserLocalStorage)

])



/* 
  DUVIDAS...
    Se usar o react-persist, preciso realizar operações ainda no LocalStorage?

*/
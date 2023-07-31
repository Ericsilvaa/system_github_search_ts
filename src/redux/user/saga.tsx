// import {all, fork, call, put, takeLatest} from 'redux-saga/effects'
import {all , takeLatest, call, put, EffectFunction} from 'redux-saga/effects'
import { onGetUserFailure,onGetUserSuccess } from './slice'
import axios from 'axios'
import IUser from '../../interfaces/IUser'


const getUserApi: EffectFunction<string, unknown, unknown> = async (name: string | undefined)=> {
  const response = await axios.get(`https://api.github.com/users/${name}`)
  return response.data
}


function* onGetUser(user) {
  const {payload}: {payload: string} = user
  try {
    const user: IUser = yield call(getUserApi, payload)
    yield put(onGetUserSuccess(user))
  } catch (error) {
    console.log('caiu no catch')
    yield put(onGetUserFailure(error))
  }
}




export default all([
  // pode ser um FORK() -> aceita uma função
  takeLatest('loadUser/onGetUser', onGetUser),

])



/* 
  DUVIDAS...
    Se usar o react-persist, preciso realizar operações ainda no LocalStorage?

*/
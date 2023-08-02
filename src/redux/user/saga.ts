// import {all, fork, call, put, takeLatest} from 'redux-saga/effects'
import { all, takeLatest, call, put } from 'redux-saga/effects'
import { onGetUserFailure, onGetUserSuccess } from './slice'
import { PayloadAction } from '@reduxjs/toolkit'

import axios from 'axios'
import IUser from '../../interfaces/IUser'

const getUserApi = async (name: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${name}`)
    if(response.status === 404) throw new Error('Erro de Requisição')
    const data: IUser = await response.data
    return data
  } catch (error)  {
    return false
  }
  
}


function* onGetUserGithub({ payload }: PayloadAction<string>): Generator<any, void, any> {
  try {
    const user = yield call(getUserApi, payload)
    if(!user) throw new Error('Not Found')
    yield put(onGetUserSuccess(user))
  } catch (error) {
    yield put(onGetUserFailure('Not Found'))
  }
}




export default all([takeLatest('loadUser/onGetUser', onGetUserGithub)])


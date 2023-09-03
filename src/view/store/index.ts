import {configureStore} from '@reduxjs/toolkit'
import {HomeReducer} from '../screens/Home/redux'
import {LoginReducer} from '../screens/Login/redux'
import {RegisterReducer} from '../screens/Register/redux'
import {VerifyAuthCodeReducer} from '../screens/VerifyAuthCode/redux'

export const reducer = {
  register: RegisterReducer.slice.reducer,
  login: LoginReducer.slice.reducer,
  verifyAuthCode: VerifyAuthCodeReducer.slice.reducer,
  home: HomeReducer.slice.reducer,
}


const store = configureStore({
  reducer: reducer,
})

export type RootState = ReturnType<typeof store.getState>;

export default store

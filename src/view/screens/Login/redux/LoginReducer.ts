import {createSlice} from '@reduxjs/toolkit'
import {LoginState} from '.'

const initialState = LoginState.initialState

export class LoginReducer {
  static slice = createSlice({
    name: 'login',
    initialState,
    reducers: {
      editEmail: (state, action) => {
        state.email = action.payload.email
        state.enableLogin = state.email.length !== 0 && state.password.length !== 0
        state.loginError = false
        return state
      },
      editPassword: (state, action) => {
        state.password = action.payload.password
        state.enableLogin = state.email.length !== 0 && state.password.length !== 0
        state.loginError = false
        return state
      },
      updateError: (state, action) => {
        state.loginError = action.payload.loginError
      },


      //==don't remove this reducer============
      updateLoading: (state, action) => {
        state.loading = action.payload.loading
      },
      resetState: () => {
        return initialState
      },
      //=======================================
    },
  })

  static actions = this.slice.actions
}

export default LoginReducer.slice.reducer

import {createSlice} from '@reduxjs/toolkit'
import {RegisterState} from '.'

const initialState = RegisterState.initialState

export class RegisterReducer {
  static slice = createSlice({
    name: 'register',
    initialState,
    reducers: {
      editEmail: (state, action) => {
        state.email.value = action.payload.email
        state.email.isValid = action.payload.isValidEmail
        return state
      },
      editPassword: (state, action) => {
        state.password.value = action.payload.password
        state.password.isValid = action.payload.isValidPassword
        state.confirmPassword.isValid = action.payload.isValidConfirmPassword
        return state
      },
      editConfirmPassword: (state, action) => {
        state.confirmPassword.value = action.payload.confirmPassword
        state.confirmPassword.isValid = action.payload.isValidConfirmPassword
        return state
      },
      updateEnableRegister: (state, action) => {
        state.enableRegister = action.payload.enableRegister
        return state
      },


      //==don't remove this reducer============
      updateLoading: (state, action) => {
        state.loading = action.payload.loading
        return state
      },
      resetState: () => {
        return initialState
      },
      //=======================================
    },
  })

  static actions = this.slice.actions
}

export default RegisterReducer.slice.reducer

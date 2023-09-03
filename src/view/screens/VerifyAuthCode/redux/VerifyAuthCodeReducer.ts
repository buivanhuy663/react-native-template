import {createSlice} from '@reduxjs/toolkit'
import {VerifyAuthCodeState} from '.'

const initialState = VerifyAuthCodeState.initialState

export class VerifyAuthCodeReducer {
  static slice = createSlice({
    name: 'verifyAuthCode',
    initialState,
    reducers: {
      changeCode: (state, action) => {
        state.code = action.payload.code
        state.enableVerify = state.code.length === 4
        state.isErrorCode = false
        return state
      },

      updateError: (state, action) => {
        state.isErrorCode = action.payload.isErrorCode
        state.enableVerify = !state.isErrorCode
        return state
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

export default VerifyAuthCodeReducer.slice.reducer

import {createSlice} from '@reduxjs/toolkit'
import {ReplacePascalCameState} from '.'

const initialState = ReplacePascalCameState.initialState

export class ReplacePascalCameReducer {
  static slice = createSlice({
    name: '_replace_snake_came',
    initialState,
    reducers: {
      updateState: (state, action) => {
        //TODO: update state
        state.count = action.payload.count + 1
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

export default ReplacePascalCameReducer.slice.reducer

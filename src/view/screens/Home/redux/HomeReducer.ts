import {createSlice} from '@reduxjs/toolkit'
import {HomeState} from '.'

const initialState = HomeState.initialState

export class HomeReducer {
  static slice = createSlice({
    name: 'home',
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

export default HomeReducer.slice.reducer

import {BaseState} from '../../../base'

interface State extends BaseState {
  //TODO: define state
  count: number
}

export class HomeState {
  static initialState: State = {
    loading: false,
    count: 0,
  }
}

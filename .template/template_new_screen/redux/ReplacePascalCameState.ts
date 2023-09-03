import {BaseState} from '../../../base'

interface State extends BaseState {
  //TODO: define state
  count: number
}

export class ReplacePascalCameState {
  static initialState: State = {
    loading: false,
    count: 0,
  }
}

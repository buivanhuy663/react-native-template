import {BaseState} from '../../../base'

interface State extends BaseState {
  //TODO: define state
  code: string
  isErrorCode: boolean
  enableVerify: boolean
}

export class VerifyAuthCodeState {
  static initialState: State = {
    loading: false,
    code: '',
    isErrorCode: false,
    enableVerify: false,
  }
}

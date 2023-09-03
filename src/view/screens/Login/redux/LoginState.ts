import {BaseState} from '../../../base'

interface State extends BaseState {
  email: string
  password: string
  enableLogin: boolean
  loginError: boolean
}

export class LoginState {
  static initialState: State = {
    loading: false,
    email: '',
    password: '',
    enableLogin: false,
    loginError: false,
  }
}

import {BaseState} from '../../../base'

interface InputType {
  value: string,
  isValid: boolean
}

interface State extends BaseState {
  email: InputType
  password: InputType
  confirmPassword: InputType
  enableRegister: boolean
}

export class RegisterState {
  static initialState: State = {
    loading: false,
    email: {value: '', isValid: true},
    password: {value: '', isValid: true},
    confirmPassword: {value: '', isValid: true},
    enableRegister: false,
  }
}

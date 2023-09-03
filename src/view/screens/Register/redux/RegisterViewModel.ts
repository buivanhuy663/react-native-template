import {HttpStatusCode} from 'axios'
import {RegisterReducer} from '.'
import {AuthRepository} from '../../../../data/repositories/AuthRepository'
import {Validation} from '../../../../utilities/Validation'
import {BaseViewModel} from '../../../base'
import {showToast} from '../../../components/ShowToastAndroid'
import {AppScreen} from '../../../navigation/AppScreen'
import store from '../../../store'

const actions = RegisterReducer.actions
export class RegisterViewModel extends BaseViewModel {
  editEmail = (value: string) => {
    store.dispatch(actions.editEmail({
      email: value,
      isValidEmail: Validation.isEmail(value) || value.length === 0,
    }))
    store.dispatch(actions.updateEnableRegister({
      enableRegister: this.checkEnableRegister(),
    }))
  }

  editPassword = (value: string) => {
    const states = store.getState().register
    store.dispatch(actions.editPassword({
      password: value,
      isValidPassword: Validation.isPassowrd(value) || value.length === 0,
      isValidConfirmPassword: value === states.confirmPassword.value,
    }))
    store.dispatch(actions.updateEnableRegister({
      enableRegister: this.checkEnableRegister(),
    }))
  }

  editConfirmPassword = (value: string) => {
    const states = store.getState().register

    store.dispatch(actions.editConfirmPassword({
      confirmPassword: value,
      isValidConfirmPassword: value === states.password.value,
    }))
    store.dispatch(actions.updateEnableRegister({
      enableRegister: this.checkEnableRegister(),
    }))
  }

  checkEnableRegister(): boolean {
    const states = store.getState().register
    return Validation.isEmail(states.email.value)
      && Validation.isPassowrd(states.password.value)
      && (states.password.value === states.confirmPassword.value)
  }

  async register(): Promise<void> {
    const states = store.getState().register
    this.runPromiseLoading(
      actions,
      AuthRepository.register({
        email: states.email.value,
        password: states.password.value,
      }).then((response) => {
        switch (response.data.status) {
          case HttpStatusCode.Ok: {
            this.navigator.replace(AppScreen.verifyAuthCode, {email: states.email.value})
            break
          }
        }
      }).catch((e) => {
        switch (e.response.status) {
          case HttpStatusCode.Conflict: {
            showToast('Error')
            break
          }
        }
      }),
      {
        onStart: () => {
          this.disableBackDeviceButton()
        },
        onFinish: () => {
          this.enableBackDeviceButton()
        },
      })
  }

  resetState() {
    // Reset state, don't remove
    store.dispatch(actions.resetState())
  }
}

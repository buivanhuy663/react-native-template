import {LoginReducer} from '.'
import {AuthRepository} from '../../../../data/repositories/AuthRepository'
import {BaseViewModel} from '../../../base'
import {AppScreen} from '../../../navigation/AppScreen'
import store from '../../../store'

const actions = LoginReducer.actions
export class LoginViewModel extends BaseViewModel {
  editEmail(value: string) {
    store.dispatch(actions.editEmail({
      email: value,
    }))
  }

  editPassword(value: string) {
    store.dispatch(actions.editPassword({
      password: value,
    }))
  }

  login() {
    const states = store.getState().login
    this.runPromiseLoading(
      actions,
      AuthRepository.login({email: states.email, password: states.password})
        .then(() => {
          this.navigator.replaceAll(AppScreen.home)
        }).catch(() => {
          store.dispatch(actions.updateError({loginError: true}))
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

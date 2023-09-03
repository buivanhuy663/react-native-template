import {VerifyAuthCodeReducer} from '.'
import {AuthRepository} from '../../../../data/repositories/AuthRepository'
import {loggerHelper} from '../../../../utilities'
import {BaseViewModel} from '../../../base'
import {AppScreen} from '../../../navigation/AppScreen'
import store from '../../../store'

const actions = VerifyAuthCodeReducer.actions
export class VerifyAuthCodeViewModel extends BaseViewModel {

  email = ''

  initState(email: string) {
    loggerHelper.debug(email)
    this.email = email
  }

  changeCode(value: string) {
    store.dispatch(actions.changeCode({
      code: value,
    }))
  }

  verifyCode() {
    const code = store.getState().verifyAuthCode.code
    this.runPromiseLoading(
      actions,
      AuthRepository.verifyAuthCode({
        email: this.email,
        authCode: code,
      }).then(() => {
        this.navigator.replace(AppScreen.login, {email: this.email})
      }).catch(() => {
        store.dispatch(actions.updateError({isErrorCode: true}))
      })
    )
  }

  resetState() {
    // Reset state, don't remove
    store.dispatch(actions.resetState())
  }
}

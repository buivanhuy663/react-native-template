import {BaseViewModel} from '../../base'
import {AppScreen} from '../../navigation/AppScreen'

export class WelcomeViewModel extends BaseViewModel {
  moveToTestPage(): void {
    this.navigator.push(AppScreen.verifyAuthCode)
  }

  onPressLoginButton(): void {
    this.navigator.push(AppScreen.login)
  }

  onPressRegiterButton(): void {
    this.navigator.push(AppScreen.register)
  }
}

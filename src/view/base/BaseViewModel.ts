import {BackHandler} from 'react-native'
import {loggerHelper} from '../../utilities'
import {Navigator} from '../navigation'
import store from '../store'

export class BaseViewModel {
  constructor() {

  }
  navigator = new Navigator()
  private promiseSet = new Set<Promise<any>>()
  private canBackDeviceButton = true
  private backHanlder: any

  disableBackDeviceButton() {
    this.canBackDeviceButton = false
  }

  enableBackDeviceButton() {
    this.canBackDeviceButton = true
  }

  initComponent() {
    this.backHanlder = BackHandler.addEventListener('hardwareBackPress', () => {
      loggerHelper.debug(`Click Back Device Button [${this.canBackDeviceButton}]`)
      return !this.canBackDeviceButton
    })
  }

  disposeComponent() {
    this.backHanlder.remove()
  }

  runPromiseLoading<T>(
    actions: any,
    promise: Promise<T>,
    props?: {
      onStart?: Function,
      onFinish?: Function
    }): Promise<T> {
    loggerHelper.debug('runPromiseLoading: Show Loading')
    props?.onStart?.()
    this.showLoading(actions)
    this.promiseSet.add(promise)

    promise.finally(() => {
      this.promiseSet.delete(promise)
      if (this.promiseSet.size === 0) {
        loggerHelper.debug('runPromiseLoading: Dismiss Loading')
        props?.onFinish?.()
        this.dismissLoading(actions)
      }
    })
    return promise
  }

  showLoading(actions: any) {
    store.dispatch(actions.updateLoading({loading: true}))
  }
  dismissLoading(actions: any) {
    store.dispatch(actions.updateLoading({loading: false}))
  }
}

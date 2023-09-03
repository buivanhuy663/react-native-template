import {HomeReducer} from '.'
import {BaseViewModel} from '../../../base'
import store from '../../../store'

const actions = HomeReducer.actions
export class HomeViewModel extends BaseViewModel {
  updateState = async () => {
    const states = store.getState().home
    this.showLoading(actions)
    await new Promise(resolve => setTimeout(resolve, 3000))
    this.dismissLoading(actions)
    store.dispatch(actions.updateState({
      //TODO: change value
      count: states.count,
    }))
  }

  resetState() {
    // Reset state, don't remove
    store.dispatch(actions.resetState())
  }
}

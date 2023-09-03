import {ReplacePascalCameReducer} from '.'
import {BaseViewModel} from '../../../base'
import store from '../../../store'

const actions = ReplacePascalCameReducer.actions
export class ReplacePascalCameViewModel extends BaseViewModel {
  updateState = async () => {
    const states = store.getState()._replace_snake_came
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

import {Route, useNavigation} from '@react-navigation/native'
import {loggerHelper} from '../../utilities'

export interface PropsNavigator {
  route: Route<string, any>,
}
export class Navigator {

  navigation: any = useNavigation()

  replace(page: string, params?: any): void {
    loggerHelper.debug(`Navigate [${page}]`)
    this.navigation.replace(page, params)
  }

  push(page: string, params?: any): void {
    loggerHelper.debug(`Navigate [${page}]`)
    this.navigation.push(page, params,)
  }

  navigate(page: string, params?: any): void {
    loggerHelper.debug(`Navigate [${page}]`)
    this.navigation.navigate(page, params)
  }

  replaceAll(page: string, params?: any) {
    loggerHelper.debug(`Navigate All [${page}]`)
    this.navigation.popToTop()
    this.navigation.replace(page, params)
  }


  popToTop(): void {
    loggerHelper.debug('PopToTop')
    this.navigation.popToTop()
  }

  back(): void {
    loggerHelper.debug('Back')
    this.navigation.goBack()
  }
}


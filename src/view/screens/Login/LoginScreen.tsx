import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {loggerHelper} from '../../../utilities'
import {BaseScreen} from '../../components'
import {PropsNavigator} from '../../navigation'
import {AppColors, AppImages} from '../../resources'
import {ErrorLoginText, InputEmail, InputPassword, LoadingScreen, LoginButton} from './components'
import {LoginViewModel} from './redux'

/**
 * Created by:  buivanhuy663
 * Created at:  2023-09-01
 * Screen:      [LoginPage]
 * Reducer:     [LoginReducer]
 * ViewModel:   [LoginViewModel]
 * State:       [LoginState]
 * Description:
 * //TODO: This is [LoginPage]
 */
export default function LoginScreen(props: PropsNavigator): React.JSX.Element {
  loggerHelper.debug('Build [LoginScreen]')

  const [viewModel] = useState(new LoginViewModel())

  useEffect(() => {
    initComponent()
    return () => {
      disposeComponent()
    }
  },)

  function initComponent() {
    loggerHelper.debug(`Init [${props.route}]`)
    viewModel.resetState()
    viewModel.initComponent()
  }

  function disposeComponent() {
    loggerHelper.debug(`Dispose [${props.route}]`)
    viewModel.resetState()
    viewModel.disposeComponent()
  }

  return (
    <BaseScreen showBack={true} loading={<LoadingScreen />}>
      <View style={styles.wrapBody}>
        <Text style={styles.loginText} >
          Welcome back! Glad to see you, Again!
        </Text>


        <InputEmail viewModel={viewModel} />

        <InputPassword viewModel={viewModel} />

        <ErrorLoginText />

        <LoginButton viewModel={viewModel} />

      </View>
      <Image style={styles.imageBackground} source={AppImages.background} />
    </BaseScreen>
  )
}

const styles = StyleSheet.create({
  wrapBody: {
    zIndex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 22,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  loginText: {
    color: AppColors.black,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})

import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {loggerHelper} from '../../../utilities'
import {BaseScreen} from '../../components'
import {PropsNavigator} from '../../navigation'
import {AppColors, AppImages} from '../../resources'
import {InputConfirmPassword, InputEmail, InputPassword, LoadingScreen, RegisterButton} from './components'
import {RegisterViewModel} from './redux'

/**
 * Created by:  buivanhuy663
 * Created at:  2023-08-19
 * Screen:      [RegisterPage]
 * Reducer:     [RegisterReducer]
 * ViewModel:   [RegisterViewModel]
 * State:       [RegisterState]
 * Description:
 * //TODO: This is [RegisterPage]
 */
export default function RegisterScreen(props: PropsNavigator): React.JSX.Element {
  loggerHelper.debug('Build [RegisterScreen]')

  const [viewModel] = useState(new RegisterViewModel())

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

        <Text style={styles.regiterText} >
          Hello! Register to get started
        </Text>

        <InputEmail viewModel={viewModel} />

        <InputPassword viewModel={viewModel} />

        <InputConfirmPassword viewModel={viewModel} />

        <RegisterButton viewModel={viewModel} />

      </View>


      <Image
        style={styles.imageBackground}
        source={AppImages.background} />
    </BaseScreen>
  )
}

const styles = StyleSheet.create({

  imageBackground: {
    width: '100%',
    height: '100%',
  },

  wrapBody: {
    zIndex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 22,
  },

  registerView: {
    marginBottom: 30,
  },

  regiterText: {
    color: AppColors.black,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
})


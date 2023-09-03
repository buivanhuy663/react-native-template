import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {loggerHelper} from '../../../utilities'
import {BaseScreen} from '../../components'
import {PropsNavigator} from '../../navigation'
import {AppColors} from '../../resources'
import {InputVerifyCode, LoadingScreen, VerifyButton} from './components'
import {VerifyAuthCodeViewModel} from './redux'

/**
 * Created by:  buivanhuy663
 * Created at:  2023-08-19
 * Screen:      [VerifyAuthCodePage]
 * Reducer:     [VerifyAuthCodeReducer]
 * ViewModel:   [VerifyAuthCodeViewModel]
 * State:       [VerifyAuthCodeState]
 * Description:
 * //TODO: This is [VerifyAuthCodePage]
 */
export default function VerifyAuthCodeScreen(props: PropsNavigator): React.JSX.Element {
  loggerHelper.debug('Build [VerifyAuthCodeScreen]')

  const [viewModel] = useState(new VerifyAuthCodeViewModel())

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
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.description}>Enter the verification code we just sent on your email address.</Text>
        <InputVerifyCode viewModel={viewModel} />
        <VerifyButton viewModel={viewModel} />
      </View>
    </BaseScreen>
  )
}

const styles = StyleSheet.create({
  wrapBody: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 22,
    paddingTop: 81,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: AppColors.black,

  },
  description: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#838BA1',

  },
})

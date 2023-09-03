import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {loggerHelper} from '../../../utilities'
import {BaseScreen, ButtonCommon} from '../../components'
import {AppColors, AppImages} from '../../resources'
import {WelcomeViewModel} from './WelcomeViewModel'

/**
 * Created by:  buivanhuy663
 * Created at:  2023-08-19
 * Screen:      [WelcomePage]
 * Reducer:     [WelcomeReducer]
 * ViewModel:   [WelcomeViewModel]
 * State:       [WelcomeState]
 * Description:
 * //TODO: This is [WelcomePage]
 */
export default function WelcomeScreen(): React.JSX.Element {
  loggerHelper.debug('Build [WelcomeScreen]')

  const [viewModel] = useState(new WelcomeViewModel())

  useEffect(() => {
    initComponent()
    return () => {
      disposeComponent()
    }
  },)

  function initComponent() {
    viewModel.initComponent()
    loggerHelper.debug('Init [WelcomeScreen]')
  }

  function disposeComponent() {
    viewModel.disposeComponent()
    loggerHelper.debug('Dispose [WelcomeScreen]')
  }

  return (
    <BaseScreen>
      <View style={styles.wrapBody}>

        <View style={styles.welcomeView}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.welcomeText}>Messenger</Text>
        </View>

        <ButtonCommon
          text="LOGIN"
          enable={true}
          onPress={() => viewModel.onPressLoginButton()}
          styles={{marginBottom: 15}}
        />

        <ButtonCommon
          text="REGISTER"
          onPress={() => viewModel.onPressRegiterButton()}
          enable={true}
          childStyle={{
            borderWidth: 2,
            borderColor: AppColors.black,
            backgroundColor: AppColors.white,
            color: AppColors.black,
          }}
          styles={{marginBottom: 50}}
        />

      </View>
      <Image style={styles.imageBackground} source={AppImages.background} />
    </BaseScreen>
  )
}

const styles = StyleSheet.create({
  baseScreen: {
    backgroundColor: AppColors.backgroundScreen,
    flex: 1,
  },

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

  welcomeView: {
    marginBottom: 30,
  },

  welcomeText: {
    color: AppColors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },

  registerText: {
    color: AppColors.black,
    backgroundColor: AppColors.white,
    height: 56,
    marginHorizontal: 22,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
    borderColor: AppColors.black,
    marginBottom: 50,
  },
})


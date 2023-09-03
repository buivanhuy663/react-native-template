import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {loggerHelper} from '../../../utilities'
import {BaseScreen} from '../../components'
import {PropsNavigator} from '../../navigation'
import {LoadingScreen, TextComponent} from './components'
import {HomeViewModel} from './redux'

/**
 * Created by:  buivanhuy663
 * Created at:  2023-09-01
 * Screen:      [HomePage]
 * Reducer:     [HomeReducer]
 * ViewModel:   [HomeViewModel]
 * State:       [HomeState]
 * Description:
 * //TODO: This is [HomePage]
 */
export default function HomeScreen(props: PropsNavigator): React.JSX.Element {
  loggerHelper.debug('Build [HomeScreen]')

  const [viewModel] = useState(new HomeViewModel())

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
    <BaseScreen loading={<LoadingScreen />}>
      <View style={styles.wrapBody}>
        <TextComponent viewModel={viewModel} />
      </View>
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
    justifyContent: 'center',
  },
})

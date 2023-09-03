import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {loggerHelper} from '../../../utilities/helper'
import {BaseScreen} from '../../components'
import {PropsNavigator} from '../../navigation'
import {LoadingScreen, TextComponent} from './components'
import {ReplacePascalCameViewModel} from './redux'

/**
 * Created by:  {autho}
 * Created at:  {DateNow}
 * Screen:      [ReplacePascalCamePage]
 * Reducer:     [ReplacePascalCameReducer]
 * ViewModel:   [ReplacePascalCameViewModel]
 * State:       [ReplacePascalCameState]
 * Description:
 * //TODO: This is [ReplacePascalCamePage]
 */
export default function ReplacePascalCameScreen(props: PropsNavigator): React.JSX.Element {
  loggerHelper.debug('Build [ReplacePascalCameScreen]')

  const [viewModel] = useState(new ReplacePascalCameViewModel())

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

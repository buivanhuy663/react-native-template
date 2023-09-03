/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

import {Provider} from 'react-redux'
import {AppContainer} from './src/view/navigation'
import store from './src/view/store'


function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App

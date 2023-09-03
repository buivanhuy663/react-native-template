import React from 'react'
import {StyleSheet} from 'react-native'
import {Text} from 'react-native-elements'
import {useSelector} from 'react-redux'
import store from '../../../store'

export function ErrorLoginText() {
  const error = useSelector(() => store.getState().login.loginError)
  return error ? <Text style={styles.errorText}>Login fail</Text> : null
}

const styles = StyleSheet.create({

  errorText: {
    color: 'red',
  },
})

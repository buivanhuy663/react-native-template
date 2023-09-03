import React from 'react'
import {Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native'
import {AppColors} from '../resources/AppColors'
import BackButton from './BackButton'


export default function BaseScreen(props: {
  children?: React.ReactNode
  loading?: React.ReactNode,
  showBack?: boolean,
} = {loading: false, showBack: false}): React.JSX.Element {

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={styles.baseScreen}>
        {props.showBack === true && <BackButton />}
        {props.children}
        {props.loading}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  baseScreen: {
    backgroundColor: AppColors.backgroundScreen,
    flex: 1,
  },
})

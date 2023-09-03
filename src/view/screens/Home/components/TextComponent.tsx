import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'
import {AppColors} from '../../../resources'
import store from '../../../store'
import {HomeViewModel} from '../redux'

export function TextComponent(props: {viewModel: HomeViewModel}) {
  const count = useSelector(() => store.getState().home.count)
  return (
    <TouchableOpacity
      onPress={() => props.viewModel.updateState()}
      style={styles.text}
      accessible={true}>
      <Text style={styles.text} >Home Count {count}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    color: AppColors.black,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    height: 56,
    marginHorizontal: 22,
    marginBottom: 40,
  },
})

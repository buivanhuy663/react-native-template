import React from 'react'
import {KeyboardTypeOptions, StyleProp, StyleSheet, TextInput, TextStyle} from 'react-native'
import {AppColors} from '../resources'

interface ParamProps {
  styles?: StyleProp<TextStyle>
  onChangeText?: (value: string) => void
  value?: string
  placeholder?: string
  keyboardType?: KeyboardTypeOptions
  error?: boolean
}

export default function InputCommon(props: ParamProps): React.JSX.Element {
  return (
    <TextInput
      style={[styles.input, props.styles, {borderColor: props.error ?? false ? 'red' : '#E8ECF4'}]}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor="#8391A1"
      keyboardType={props.keyboardType}
      secureTextEntry={true}
      autoCorrect={false}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    color: AppColors.black,
    borderRadius: 8,
    backgroundColor: '#F7F8F9',
    borderColor: '#E8ECF4',
  },
})


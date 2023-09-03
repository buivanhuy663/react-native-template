import React from 'react'
import {GestureResponderEvent, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity} from 'react-native'
import {AppColors} from '../resources/AppColors'

interface ParamProps {
  childStyle?: StyleProp<TextStyle>
  styles?: StyleProp<TextStyle>
  text?: string
  enable?: boolean
  disbleColor?: string
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

export default function ButtonCommon(props: ParamProps): React.JSX.Element {
  const disableColor = props.disbleColor ?? AppColors.disableButton


  return (
    <TouchableOpacity
      disabled={!props.enable}
      onPress={props.onPress}
      accessible={true}
      style={props.styles}
    >
      <Text
        style={[
          styles.button,
          props.childStyle,
          props.enable ? undefined : {backgroundColor: disableColor}]}>
        {props.text}
      </Text>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  button: {
    color: AppColors.white,
    backgroundColor: AppColors.black,
    height: 56,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  disable: {
    backgroundColor: AppColors.disableButton,
  },
})


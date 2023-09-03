import React from 'react'
import {StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native'
import {Icon} from 'react-native-elements'
import {Navigator} from '../navigation'
import {AppColors} from '../resources'




export default function BackButton(props: {style?: StyleProp<ViewStyle>}) {
  const navigator = new Navigator()
  return (
    <TouchableOpacity
      onPress={() => {navigator.back()}}
      style={[props.style, {
        marginTop: 12,
        marginLeft: 12,
        position: 'absolute',
        zIndex: 10,
      }]}>
      <View style={styles.backButton}>
        <Icon
          name="arrow-back-ios"
          color={AppColors.black}
          size={19}
        />
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  backButton: {
    height: 42,
    width: 42,
    borderRadius: 15,
    borderColor: '#E8ECF4',
    borderWidth: 3,
    paddingLeft: 8,
    justifyContent: 'center',
    verticalAlign: 'middle',
  },
})


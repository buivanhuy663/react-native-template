import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'


export default function LoadingCommon(): React.JSX.Element {
  return (
    <View style={styles.loading} >
      <ActivityIndicator size={40} color="#0000ff" />
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    zIndex: 20,
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
})

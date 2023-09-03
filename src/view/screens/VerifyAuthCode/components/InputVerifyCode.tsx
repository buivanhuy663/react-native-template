import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import {Text} from 'react-native-elements'
import {useSelector} from 'react-redux'
import store from '../../../store'
import {VerifyAuthCodeViewModel} from '../redux'

export function InputVerifyCode(props: {viewModel: VerifyAuthCodeViewModel}) {
  const code = useSelector(() => store.getState().verifyAuthCode.code)
  const isErrorCode = useSelector(() => store.getState().verifyAuthCode.isErrorCode)
  return (
    <View style={{
      marginTop: 32,
      marginBottom: 38,
    }}>
      <View style={styles.grouCode} >
        <CellCode value={code.charAt(0)} isError={isErrorCode} />
        <CellCode value={code.charAt(1)} isError={isErrorCode} />
        <CellCode value={code.charAt(2)} isError={isErrorCode} />
        <CellCode value={code.charAt(3)} isError={isErrorCode} />
      </View>
      <InputCode viewModel={props.viewModel} />
    </View>
  )
}

function CellCode(props: {value: string, isError: boolean}) {
  return (
    <Text style={[styles.cellCode, {
      backgroundColor: props.value === '' ? '#F7F8F9' : 'white',
      borderColor: props.isError ? 'red' : props.value === '' ? '#E8ECF4' : '#35C2C1',
    }]} >
      {props.value}
    </Text>
  )
}

function InputCode(props: {viewModel: VerifyAuthCodeViewModel}) {
  return (
    <TextInput
      style={{
        borderColor: 'black',
        borderWidth: 2,
        height: 60, width: '100%',
        zIndex: 1,
        opacity: 0, // invisible view
      }}
      caretHidden={true}
      maxLength={4}
      onChangeText={(value) => {props.viewModel.changeCode(value)}}
      keyboardType={'decimal-pad'}
      secureTextEntry={true}
      autoCorrect={false} // hide cursor
    />
  )
}


const styles = StyleSheet.create({
  grouCode: {
    flexDirection: 'row',
    gap: 10,
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'space-between',
    width: '100%',
  },
  cellCode: {
    height: 60,
    width: 60,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1.5,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
})


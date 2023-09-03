import React from 'react'
import {useSelector} from 'react-redux'
import {ButtonCommon} from '../../../components'
import store from '../../../store'
import {VerifyAuthCodeViewModel} from '../redux'

export function VerifyButton(props: {viewModel: VerifyAuthCodeViewModel}) {
  const enable = useSelector(() => store.getState().verifyAuthCode.enableVerify)
  return (
    <ButtonCommon
      onPress={() => {
        props.viewModel.verifyCode()
      }}
      text="Verify"
      styles={{marginBottom: 30}}
      enable={enable}
    />
  )
}

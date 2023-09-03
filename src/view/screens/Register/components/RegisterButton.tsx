import React from 'react'
import {useSelector} from 'react-redux'
import {ButtonCommon} from '../../../components'
import store from '../../../store'
import {RegisterViewModel} from '../redux/RegisterViewModel'

export function RegisterButton(props: {viewModel: RegisterViewModel}) {
  const enableRegister = useSelector(() => store.getState().register.enableRegister)
  return (
    <ButtonCommon
      onPress={() => {
        props.viewModel.register()
      }}
      text="Register"
      styles={{marginBottom: 30}}
      enable={enableRegister}
    />
  )
}

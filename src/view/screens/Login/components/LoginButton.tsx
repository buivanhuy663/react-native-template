import React from 'react'
import {useSelector} from 'react-redux'
import {ButtonCommon} from '../../../components'
import store from '../../../store'
import {LoginViewModel} from '../redux'

export function LoginButton(props: {viewModel: LoginViewModel}) {
  const enableLogin = useSelector(() => store.getState().login.enableLogin)
  return (
    <ButtonCommon
      onPress={() => {
        props.viewModel.login()
      }}
      text="Login"
      styles={{marginBottom: 50, marginTop: 50}}
      enable={enableLogin}
    />
  )
}

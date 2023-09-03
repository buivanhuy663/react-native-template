import React from 'react'
import {useSelector} from 'react-redux'
import {InputCommon} from '../../../components'
import store from '../../../store'
import {LoginViewModel} from '../redux'

export function InputEmail(props: {viewModel: LoginViewModel}) {
  const error = useSelector(() => store.getState().login.loginError)
  return (
    <InputCommon
      onChangeText={(value) => {
        props.viewModel.editEmail(value)
      }}
      placeholder="Email"
      keyboardType="email-address"
      styles={{marginBottom: 10}}
      error={error}
    />
  )
}

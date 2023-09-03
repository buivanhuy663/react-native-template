import React from 'react'
import {useSelector} from 'react-redux'
import {InputCommon} from '../../../components'
import store from '../../../store'
import {RegisterViewModel} from '../redux/RegisterViewModel'

export function InputPassword(props: {viewModel: RegisterViewModel}) {
  const isValidPassword = useSelector(() => store.getState().register.password.isValid)
  return (
    <InputCommon
      onChangeText={(value) => {
        props.viewModel.editPassword(value)
      }}
      placeholder="Password"
      styles={{marginBottom: 10}}
      error={!isValidPassword}
    />
  )
}

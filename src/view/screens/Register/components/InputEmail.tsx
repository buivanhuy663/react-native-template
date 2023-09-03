import React from 'react'
import {useSelector} from 'react-redux'
import {InputCommon} from '../../../components'
import store from '../../../store'
import {RegisterViewModel} from '../redux/RegisterViewModel'

export function InputEmail(props: {viewModel: RegisterViewModel}) {
  const isValidEmail = useSelector(() => store.getState().register.email.isValid)
  return (
    <InputCommon
      onChangeText={(value) => {
        props.viewModel.editEmail(value)
      }}
      placeholder="Email"
      keyboardType="email-address"
      styles={{marginBottom: 10}}
      error={!isValidEmail}
    />
  )
}

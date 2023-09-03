import React from 'react'
import {useSelector} from 'react-redux'
import {InputCommon} from '../../../components'
import store from '../../../store'
import {RegisterViewModel} from '../redux/RegisterViewModel'

export function InputConfirmPassword(props: {viewModel: RegisterViewModel}) {
  const isValidConfirmPassword =
    useSelector(() => store.getState().register.confirmPassword.isValid)

  return (
    <InputCommon
      onChangeText={(value) => {
        props.viewModel.editConfirmPassword(value)
      }}
      placeholder="Confirm Passowrd"
      styles={{marginBottom: 10}}
      error={!isValidConfirmPassword}
    />
  )
}

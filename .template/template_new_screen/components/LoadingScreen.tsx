import React from 'react'
import {useSelector} from 'react-redux'
import {LoadingCommon} from '../../../components'
import store from '../../../store'

export function LoadingScreen() {
  const loading = useSelector(() => store.getState()._replace_snake_came.loading)
  return (
    loading ? <LoadingCommon /> : null
  )
}

import {ToastAndroid} from 'react-native'

export const showToast = (text: string) => {
  ToastAndroid.showWithGravity(
    text,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  )
}

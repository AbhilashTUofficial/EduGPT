import { View, Text } from 'react-native'
import React from 'react'
import CustomWebView from '../../Components/WebView/CustomWebView'

const AddScreen = () => {
  return (
    <CustomWebView webviewUrl={"https://rnfirebase.io/messaging/usage"}/>
  )
}

export default AddScreen
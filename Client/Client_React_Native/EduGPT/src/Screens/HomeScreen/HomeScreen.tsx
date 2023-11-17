import { View, Text } from 'react-native'
import React from 'react'
import CustomWebView from '../../Components/WebView/CustomWebView'

const HomeScreen = () => {
  return (
    <CustomWebView webviewUrl={"https://testfcm.com/"}/>
  )
}

export default HomeScreen
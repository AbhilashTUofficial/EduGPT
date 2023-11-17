import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import CustomWebView from '../../Components/WebView/CustomWebView';


const AuthScreen = () => {
    const navigation = useNavigation();

    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        loggedIn && navigation.dispatch(
            StackActions.replace('botnavcontroller', {
            })
        );
    }, [])

    return (
        <CustomWebView webviewUrl={"https://6556ef2d22ce8c4ed306cb51--stalwart-naiad-fbb5b1.netlify.app/login"}/>
    )
}

export default AuthScreen
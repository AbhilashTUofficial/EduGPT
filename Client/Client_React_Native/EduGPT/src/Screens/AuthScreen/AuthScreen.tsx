import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';


const AuthScreen = () => {
    const navigation = useNavigation();

    const [loggedIn, setLoggedIn] = useState(true);
    useEffect(() => {
        loggedIn && navigation.dispatch(
            StackActions.replace('botnavcontroller', {
            })
        );
    }, [])

    return (
        <View>
            <Text>AuthScreen</Text>
        </View>
    )
}

export default AuthScreen
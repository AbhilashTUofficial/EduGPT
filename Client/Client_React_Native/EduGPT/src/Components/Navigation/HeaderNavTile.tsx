import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { chatgptIcon } from '../../Constants/constants'
import { useNavigation } from '@react-navigation/native';

const HeaderNavTile = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.cont}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image style={styles.logoImg} source={chatgptIcon} />
                <Text style={styles.headerTxt}>Edu GPT</Text>
            </View>
            <Pressable onPress={()=>{navigation.navigate("profilescreen")}}>
            <Image style={styles.profileImg} source={chatgptIcon} />
            </Pressable>

        </View>
    )
}

export default HeaderNavTile

const styles = StyleSheet.create({
    cont: {
        padding: 8,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    profileImg: {
        width: 46, height: 46,
        marginVertical: 12,
        marginRight:32
    },
    logoImg:{
        width: 46, height: 46,
        marginVertical: 12,
    },
    headerTxt: {
        margin: 8,
        fontSize: 24,
        letterSpacing: 1,
        fontWeight: 400

    }
})
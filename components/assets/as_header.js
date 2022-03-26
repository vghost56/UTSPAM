import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"

const Header = () => {
    return (
        <View style={navStyle.menu}>
            <Text style={navStyle.text}>Kapalzy</Text>
        </View>
    )
}

const navStyle = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        height: 200,
    },
    text: {
        marginTop: 120,
        fontSize: 35,
        color: "blue",
        fontWeight: 'bold'
    },
})

export default Header
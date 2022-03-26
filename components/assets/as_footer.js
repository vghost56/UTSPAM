import React from 'react'
import { View, Text, StyleSheet, Colors } from "react-native"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <View style={navStyle.menu}>

            <FontAwesomeIcon 
                icon="fa-solid fa-house" 
                style={navStyle.menuIcon}
                color={'blue'}
            />
            
            <FontAwesomeIcon 
                icon="fa-solid fa-book" 
                style={navStyle.menuIcon}
                color={'blue'}
            />

            <FontAwesomeIcon 
                icon="fa-solid fa-handshake-slash" 
                style={navStyle.menuIcon}
                color={'blue'}
            />

            <FontAwesomeIcon 
                icon="fa-solid fa-bars" 
                style={navStyle.menuIcon}
                color={'blue'}
            />
            
        </View>
    )
}

const navStyle = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        backgroundColor: '#86b257',
        justifyContent: 'space-between',
        height: 500,
    },
    text: {
        marginTop: 120,
        fontSize: 35,
        color: "white",
        fontWeight: 'bold'
    },
    menuIcon: {
        marginTop: 25,
        fontSize: 40,
        marginLeft:20,
        
    },
    userIcon: {
        marginTop: 25,
        fontSize: 40,
        marginRight:20,
    },
})

export default Footer
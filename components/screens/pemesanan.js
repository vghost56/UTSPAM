import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Booking = () =>{
    return (
        <View style={formStyle.box}>
          <Text>Bababooey</Text>
        </View>
      )
}

const formStyle = StyleSheet.create({
    box:{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        position: 'absolute',
        alignSelf: 'center',
        shadowColor: '#000',
        elevation: 5,
        marginVertical: 20,
    }
})

export default Booking
import React from 'react'
import {View, Text} from 'react-native'
import Header from '../assets/as_header'
import ShipRes from '../bars/bar_res'
import Footer from '../assets/as_footer'

const Home = ({navigation}) =>{
    return (
        <View>
          <Header/>
          <ShipRes navigation={navigation}/>
          <Footer/>
        </View>
      )
}

export default Home
import React, { useState } from 'react';
import { View, Text, StyleSheet, Colors, TextInput, TouchableOpacity, Picker } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Res from './res';

const Home = ({navigation}) => {
  const [text, onChangeText] = useState({
      awal: '',
      akhir: '',
      kelas: '',
      tanggal: '',
      jam: '',
  });

  const clickHandler = (textInput) => {
      return (value) => {
          onChangeText({ ...text, [textInput]: value });
      }
  }
  
  const [selectedValueAwal, setselectedValueAwal] = useState("Pilih Pelabuhan Awal");
  const [selectedValueAkhir, setselectedValueAkhir] = useState("Pilih Pelabuhan Tujuan");
  const [selectedValueKelas, setselectedValueKelas] = useState("Pilih Kelas");

  return (
      <View style={formStyle.box}>
          <Text style={formStyle.head}> Kapalzy </Text>

          <View style={formStyle.package}>
              <Text style={formStyle.text}>Pelabuhan Awal</Text>
              <View style={formStyle.input}>
                <MaterialCommunityIcons style={formStyle.Icon} name="map" size={20} />
                <Picker 
                  style= {formStyle.form}
                  placeholder="Pilih Pelabuhan Awal"
                  selectedValue={selectedValueAwal}
                  onValueChange={(itemValue,itemIndex) => setselectedValueAwal(itemValue)}
                  value={text.awal}
                  onChangeText={clickHandler('awal')}
                  >
                    <Picker.Item label="Merak" value="merak"/>
                    <Picker.Item label="Bakauheni" value="bakauheni"/>
                </Picker>
              </View>
          </View>
          
          <View style={formStyle.package}>
              <Text style={formStyle.text}>Pelabuhan Tujuan</Text>
              <View style={formStyle.input}>
                <MaterialCommunityIcons style={formStyle.Icon} name="map-marker" size={20} />
                <Picker 
                  style= {formStyle.form}
                  placeholder="Pilih Pelabuhan Akhir"
                  selectedValue={selectedValueAkhir}
                  onValueChange={(itemValue,itemIndex) => setselectedValueAkhir(itemValue)}
                  value={text.akhir}
                  onChangeText={clickHandler('akhir')}
                  >
                    <Picker.Item label="Merak" value="merak"/>
                    <Picker.Item label="Bakauheni" value="bakauheni"/>
                </Picker>
              </View>
          </View>
          
          <View style={formStyle.package}>
              <Text style={formStyle.text}>Kelas Layanan</Text>
              <View style={formStyle.input}>
                <MaterialCommunityIcons style={formStyle.Icon} name="ferry" size={20} />
                <Picker 
                  style= {formStyle.form}
                  placeholder="Pilih Kelas"
                  selectedValue={selectedValueKelas}
                  onValueChange={(itemValue,itemIndex) => setselectedValueKelas(itemValue)}
                  value={text.kelas}
                  onChangeText={clickHandler('kelas')}
                  >
                    <Picker.Item label="Bisnis" value="bisnis"/>
                    <Picker.Item label="Ekonomi" value="ekonomi"/>
                    <Picker.Item label="Eksekutif" value="eksekutif"/>
                </Picker>
              </View>
          </View>

          <View style={formStyle.package}>
              <Text style={formStyle.text}>Tanggal Masuk Pelabuhan</Text>
              <View style={formStyle.input}>
                  <MaterialCommunityIcons style={formStyle.Icon} name="calendar" size={20} />
                  <TextInput
                      style={formStyle.form}
                      placeholder="Pilih Tanggal Masuk"
                      value={text.tanggal}
                      onChangeText={clickHandler('tanggal')}
                      underlineColorAndroid="transparent"
                  />
              </View>
          </View>

          <View style={formStyle.package}>
              <Text style={formStyle.text}>Jam Masuk Pelabuhan</Text>
              <View style={formStyle.input}>
                  <MaterialCommunityIcons style={formStyle.Icon} name="clock" size={20} />
                  <TextInput
                      style={formStyle.form}
                      placeholder="Pilih Jam Masuk"
                      value={text.jam}
                      onChangeText={clickHandler('jam')}
                      underlineColorAndroid="transparent"
                  />
              </View>
          </View>

          <View style={formStyle.package}>
              <View style={formStyle.statform}>
                  <Text style={formStyle.statxt}> Dewasa </Text>
                  <Text style={formStyle.statxt}> 1 Orang </Text>
              </View>
          </View>

          <View style={formStyle.package}>
              <TouchableOpacity 
                  style={formStyle.button}
                  onPress={() => navigation.navigate('res', {data: text})}
              >
                  <Text style={formStyle.textButton}>Buat Tiket</Text>
              </TouchableOpacity>
          </View>
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
  },
  package:{
      marginTop: 10,
  },
  form:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: '#000',
      borderRadius: 10,
      marginTop: 3,
  },
  button:{
      borderRadius: 10,
      marginVertical: 10,
      alignSelf: 'center',
      backgroundColor: 'orange',
      width: 150,
      height: 30,
  },
  textButton:{
      alignSelf: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
  },
  head:{
      alignSelf: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: 'blue',
      marginBottom: 20,
  },
  text:{
      fontSize: 16,
  },
  Icon:{
      padding: 10,
      color: 'blue',
  },
  Input:{
      marginTop: 5,
  },
  statform:{
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    width: 200,
    height: 25,
  },
  statxt:{
    fontSize: 15,
    color: 'white'
  }
})

export default Home
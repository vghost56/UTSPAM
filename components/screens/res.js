import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Res = ({ data, navigation, route }) =>{
    return (
        <View style={formStyle.box}>
            <Text style={formStyle.head}> Kapalzy </Text>
            <Text style={formStyle.text}> Kuota Tersedia 1000 </Text>
            <View style={formvStyle.boox}>
                <Text styke={formStyle.text}>{data.awal}----{">"}{data.akhir}</Text>
                <Text styke={formStyle.text}>Jadwal Masuk Pelabuhan</Text>
                <Text styke={formStyle.text}>{data.tanggal}</Text>
                <Text styke={formStyle.text}>{data.jam}</Text>
                <Text styke={formStyle.text}>Layanan</Text>
                <Text styke={formStyle.text}>{data.kelas}</Text>
                <Text styke={formStyle.text}>{data.awal}----{">"}{data.akhir}</Text>
            </View>
            <Text style={formStyle.bigText}>Data Pemesan</Text>
            <Text style={formStyle.text}>Nama Lengkap</Text>
            <Text style={formStyle.text}>Identitas</Text>
            <Text style={formStyle.text}>Umur</Text>
            <View style={formStyle.package}>
              <TouchableOpacity 
                  style={formStyle.button}
                  onPress={() => navigation.navigate('Res', {data: text})}
              >
                  <Text style={formStyle.textButton}>Batalkan</Text>
              </TouchableOpacity>
          </View>
          <View style={formStyle.package}>
              <TouchableOpacity 
                  style={formStyle.button}
                  onPress={() => navigation.navigate('Res', {data: text})}
              >
                  <Text style={formStyle.textButton}>Submit</Text>
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
    head:{
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 20,
    },
    box:{
        backgroundColor: '#gray',
        borderRadius: 5,
        padding: 20,
        width: '80%',
        position: 'absolute',
        alignSelf: 'center',
        shadowColor: '#000',
        elevation: 5,
        marginVertical: 10,
    },
})

export default Res
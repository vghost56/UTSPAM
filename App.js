import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/containers/home'
import Pemesanan from './components/containers/pemesanan';
import Pembatalan from './components/containers/pembatalan';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Homepage" component={Home}/>
        <Stack.Screen name="Pemesanan" component={Pemesanan}/>
        <Stack.Screen name="Pembatalan" component={Pembatalan}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
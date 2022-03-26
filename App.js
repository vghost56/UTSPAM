import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/screens/home'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Homepage" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
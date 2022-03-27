import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './screens/home';
import Booking from './screens/pemesanan';
import Cancelled from './screens/pembatalan';
import Setting from './screens/setting';

const homeName = "Beranda";
const bookName = "Pesanan Saya";
const cancelName = "Pembatalan";
const settingsName = "Lainnya";

const Nav = createBottomTabNavigator();

function NavContainer() {
  return (
    <NavigationContainer>
      <Nav.Navigator
        initialRouteName={homeName}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { height: 100 }
        }}>
        
        <Nav.Screen name={homeName} component={Home} options={{headerShown:false, 
            tabBarIcon:({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size}/>
            ),
            }} 
        />
        <Nav.Screen name={bookName} component={Booking} options= {{
            tabBarIcon:({color, size}) => (
                <MaterialCommunityIcons name="book" color={color} size={size}/>
            ),
            }}
        />
        <Nav.Screen name={cancelName} component={Cancelled} options= {{
            tabBarIcon:({color, size}) => (
                <MaterialCommunityIcons name="close" color={color} size={size}/>
            ),
            }}
        />
        <Nav.Screen name={settingsName} component={Setting} options={{headerShown:false,
            tabBarIcon:({color, size}) => (
            <MaterialCommunityIcons name="more" color={color} size={size}/>
            ),
            }} 
        />
      </Nav.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
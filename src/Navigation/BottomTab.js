
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpComingWeather from '../screens/UpComingWeather';
import City from '../screens/City';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
        <Tab.Navigator 
        initialRouteName='Current'
        screenOptions={{
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'grey',
            
            tabBarStyle:{backgroundColor:'lightblue'},
            headerStyle:{backgroundColor:'lightblue'},
            headerTitleStyle:{fontWeight:'bold',fontSize:26,color:'tomato'},
            headerTitleAlign: 'center',
        }}>
          <Tab.Screen name="Current" component={CurrentWeather} 
          options={{
            tabBarIcon:({focused})=>  <Feather name={'droplet'} size={25} color={focused?'tomato':'black'}/>
          }}/>
          <Tab.Screen name="UpComing" component={UpComingWeather}
          options={{
            tabBarIcon:({focused})=>  <Feather name={'clock'} size={25} color={focused?'tomato':'black'}/>
          }} />
          <Tab.Screen name="City" component={City} 
          options={{
            tabBarIcon:({focused})=>  <Feather name={'home'} size={25} color={focused?'tomato':'black'}/>
          }}/>
        </Tab.Navigator>
      );
  
}

export default BottomTab


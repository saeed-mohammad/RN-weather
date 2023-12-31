/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpComingWeather from '../screens/UpComingWeather';
import City from '../screens/City';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const BottomTab = ({weather, error}) => {
  // working...
  // console.log('tab', weather);
  return (
    <Tab.Navigator
      initialRouteName="Current"
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',

        tabBarStyle: {backgroundColor: 'lightblue'},
        headerStyle: {backgroundColor: 'lightblue'},
        headerTitleStyle: {fontWeight: 'bold', fontSize: 26, color: 'tomato'},
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen
        name="Current"
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}>
        {() => <CurrentWeather weatherData={weather} />}
      </Tab.Screen>
      <Tab.Screen
        name="UpComing"
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
        {() => <UpComingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name="City"
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
      >
           {() => <City weatherData={weather.city} />}
       </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTab;

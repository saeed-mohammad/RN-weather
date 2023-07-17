import {SafeAreaView} from 'react-native';
import React from 'react';
import UpComingWeather from './src/screens/UpComingWeather';
import CurrentWeather from './src/screens/CurrentWeather';
import City from './src/screens/City';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/Navigation/BottomTab';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
       <BottomTab />  
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;



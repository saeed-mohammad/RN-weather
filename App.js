import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import UpComingWeather from './src/screens/UpComingWeather';
import CurrentWeather from './src/screens/CurrentWeather';
import City from './src/screens/City';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      {/*
        <CurrentWeather />
        <UpComingWeather />
      */}
      <City />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});

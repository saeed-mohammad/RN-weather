import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import React from 'react';

const City = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="royalblue" />
      <ImageBackground
        style={styles.imageLayout}
        resizeMode="cover"
        source={require('../../Assets/city.jpg')}>
        <Text style={styles.country}>India</Text>
        <Text style={styles.city}>Mumbai</Text>
      </ImageBackground>
    </View>
  );
};

export default City;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
    width: '100%',
  },
  country: {
    color: 'white',
  },
  city: {
    color: 'white',
  },
});

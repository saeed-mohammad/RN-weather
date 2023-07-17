import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const CurrentWeather = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Feather name="sun" size={100} color="#900" />
      </View>
      <Text style={styles.temp}>6</Text>
      <Text style={styles.opt}>Feels like 5</Text>
      <View style={styles.sugContainer}>
        <Text style={styles.sug}>High:8</Text>
        <Text style={styles.sug}>Low:4</Text>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.desc}>Its sunny</Text>
        <Text style={styles.mesg}>Its perfect t-shirt Weather</Text>
      </View>
    </View>
  );
};

export default CurrentWeather;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'pink',
  },
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 48,
    color: 'black',
    fontWeight: 'bold',
  },
  opt: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600',
  },
  sugContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sug: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  bodyWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '100%',
  },
  desc: {
    fontSize: 48,
    color: 'black',
  },
  mesg: {
    fontSize: 28,
    color: 'black',
  },
});

/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {WeatherType} from '../utilities/weatherType';

const CurrentWeather = ({weather}) => {
  // working
  console.log('current:', weather);
  //testing
  // problem :
  // console.log('current:', weather.list[0].main);
  // const []
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Feather name="sun" size={100} color="#900" />
      </View>
      <Text style={styles.tempStyle}>6</Text>
      <Text style={styles.opt}>Feels like 5</Text>
      <View style={styles.sugContainer}>
        <Text style={styles.sug}>High:8</Text>
        <Text style={styles.sug}>Low:4</Text>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.desc}>Its sunny</Text>
        <Text style={styles.mesg}>{WeatherType['Clouds'].message}</Text>
        <TouchableOpacity
          style={styles.locationBtn}
          onPress={() => console.log('click')}>
          <Text style={styles.locationTxt}>Get location </Text>
        </TouchableOpacity>
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
  tempStyle: {
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
    gap: 20,
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
    padding: 5,
  },
  desc: {
    fontSize: 48,
    color: 'black',
  },
  mesg: {
    fontSize: 28,
    color: 'black',
  },
  locationBtn: {
    width: '100%',
  },
  locationTxt: {
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'royalblue',
    padding: 10,
    fontSize: 20,
    marginHorizontal: 10,
  },
});

import {StyleSheet, Text, TouchableOpacity, View, useAnimatedValue} from 'react-native';
import React,{useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { WeatherType } from '../utilities/weatherType';
import Geolocation from '@react-native-community/geolocation';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const CurrentWeather = () => {
const [lat,setLat]=useState(null)
const [lon,setLon]=useState(null)
  // getting the location position if requested granted...
  const getLocation=()=>{
    Geolocation.getCurrentPosition(
      position=>{
        setLat(position.coords.latitude)
        setLon(position.coords.longitude)
        console.log(position)
      },
      error=>{console.log(error.code,error.message)},
      {enableHighAccuracy:true,timeout:15000,maximumAge:10000}
    )
  }
  // 
  const fetchWeatherData=async()=>{
    const response=await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=53da6de51d5c79885b87080d900066e5`)
  }

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
        <Text style={styles.mesg}>{WeatherType['Clouds'].message}</Text>
        <TouchableOpacity
        style={styles.locationBtn}
        onPress={()=>getLocation()}>
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
    gap:20
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
    padding:5
  },
  desc: {
    fontSize: 48,
    color: 'black',
  },
  mesg: {
    fontSize: 28,
    color: 'black',
  },
  locationBtn:{
    width:'100%',
  },
  locationTxt:{
    textAlign:'center',
    color:'black',
    backgroundColor:'royalblue',
    padding:10,
    fontSize:20,
    marginHorizontal:10,
  }
});

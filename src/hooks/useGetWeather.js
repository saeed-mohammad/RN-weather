import React, {useState, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export const useGetWeather = () => {
  useEffect(() => {
    requestLocationPermission();
    getLocation();
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);

  // requesting the location permission....
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  // getting the location position, if requested is granted...
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position)
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;
        // callback...
        fetchWeatherData(longitude, latitude);
      },
      error => {
        console.log(error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  // fething weather data...
  const fetchWeatherData = async (longitude, latitude) => {
    try {
      // console.log('lat and lon:',longitude,latitude)
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=53da6de51d5c79885b87080d900066e5`,
      );
      const data = await response.json();
      setWeather(data);
      setLoading(true);
    } catch (err) {
      setError('could not fetch weather');
    } finally {
      setLoading(false);
    }
  };
  // console.log(weather);
  return [weather, loading, error];
};

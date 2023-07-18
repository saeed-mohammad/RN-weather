import {ActivityIndicator, SafeAreaView,View,PermissionsAndroid} from 'react-native';
import React,{useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './src/Navigation/BottomTab';


const App = () => {
  const [loading,setLoading]=useState(false);
  // requesting the location permission....
  useEffect(()=>{requestLocationPermission()},[])
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        // {
        //   title: 'Cool Photo App Location Permission',
        //   message:'Cool Photo App needs access to your location ',
        //   buttonNeutral: 'Ask Me Later',
        //   buttonNegative: 'Cancel',
        //   buttonPositive: 'OK',
        // },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {loading?(
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <ActivityIndicator size={'large'} color='royalblue'/>
          </View>
        ):(
          <BottomTab />  
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;



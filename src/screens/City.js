import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import IconText from '../components/IconText';

const City = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="royalblue" />
      <ImageBackground
        style={styles.imageLayout}
        resizeMode="cover"
        source={require('../../Assets/city.jpg')}>
        <View style={styles.contryContainer}>
          <Text style={styles.country}>India</Text>
          <Text style={styles.city}>Mumbai</Text>
        </View>
        <View  style={styles.userContainer}>
        <Feather name="user" size={100} color="red" />
        <Text style={styles.userTxt}>8000</Text>
        </View>
        
        <View style={styles.iconContainer}>
        <IconText icon='sunrise' color='#fff' bodyTxt='10:46:58 am'/>
        <IconText icon='sunset' color='#fff' bodyTxt='17:46:58 pm'/>
        </View> 
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
  contryContainer:{
    alignItems:'center',
    paddingTop:16
  },
  country: {
    color: 'white',
    fontSize:48
  },
  city: {
    color: 'white',
    fontSize:24
  },
  userContainer:{
    marginTop:30,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    gap:16
  },
  userTxt:{
    color:'red',
    fontSize:28,
    fontWeight:'600'
  },
  iconContainer:{
    marginTop:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
 
});

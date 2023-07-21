import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
const ErrorItem = () => {
  return (
    <View style={styles.container}>
        <Feather name="frown" size={200} color="black" />
        <Text style={styles.txt}>Sorry, something went wrong !</Text>
    </View>
  )
}

export default ErrorItem

const styles = StyleSheet.create({
  container:{
      alignItems:'center',
      gap:20
    },
    txt:{
      fontSize:24,
      textTransform:'capitalize',
      color:'black'

    }

})
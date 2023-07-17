import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
const IconText = ({icon,color,bodyTxt}) => {
  return (
    <View style={styles.icon}>
    <Feather name={icon} size={100} color={color} />
    <Text  style={styles.iconTxt}>{bodyTxt}</Text>
  </View>
  )
}

export default IconText

const styles = StyleSheet.create({
   
      icon:{
        alignItems:'center',
        gap:20,
        marginTop:20
      },
      iconTxt:{
        color:'white',
        fontSize:24
      },
})
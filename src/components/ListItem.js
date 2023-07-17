import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const ListItem = props => {
  const {dt_txt, max, min, condition} = props;
  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="#fff" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{max}</Text>
      <Text style={styles.temp}>{min}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
});

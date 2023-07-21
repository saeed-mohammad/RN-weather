import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { WeatherType } from '../utilities/weatherType';
import moment from 'moment';
const ListItem = props => {
  const {dt_txt, max, min, condition} = props;
  return (
    <View style={styles.item}>
      <Feather name={WeatherType[condition].icon} size={50} color="#fff" />
      <View style={styles.dateTxtWrapper}>
        <Text style={styles.date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={styles.date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={styles.temp}>{`${Math.round(max)}°/${Math.round(min)}°`}</Text>

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
  dateTxtWrapper:{
    flexDirection:'column'
  }
});

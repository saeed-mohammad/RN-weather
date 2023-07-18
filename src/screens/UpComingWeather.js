import {
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';

const DATA = [
  {
    dt_txt: '2023-07-17 12:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clouds',
      },
    ],
  },
  {
    dt_txt: '2023-07-17 15:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Clear',
      },
    ],
  },
  {
    dt_txt: '2023-07-17 18:00:00',
    main: {
      temp_max: 8.55,
      temp_min: 7.55,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
];

const UpComingWeather = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="royalblue" />
      <ImageBackground
        style={styles.image}
        source={require('../../Assets/upcoming-wheather.jpg')}>
        <FlatList
          // eslint-disable-next-line react-native/no-inline-styles
          style={{paddingTop: 16}}
          data={DATA}
          keyExtractor={item => item.dt_txt}
          renderItem={({item}) => (
            <ListItem
              condition={item.weather[0].main}
              dt_txt={item.dt_txt}
              max={item.main.temp_max}
              min={item.main.temp_min}
            />
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default UpComingWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    // paddingTop: 16,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  },
});

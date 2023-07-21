import {ActivityIndicator, SafeAreaView, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/Navigation/BottomTab';
import {useGetWeather} from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';
const App = () => {
  const [weather, loading, error] = useGetWeather();
  // console.log('weather:', weather.list);


  if(weather && weather.list){
    return (
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
            <BottomTab weather={weather} error={error} />
        </SafeAreaView>
      </NavigationContainer>
       );
  }


  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              {loading?(
                <ActivityIndicator size={'large'} color="royalblue" />
                ):(
                <ErrorItem />
                )}
          </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

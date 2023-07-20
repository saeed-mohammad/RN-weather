import {ActivityIndicator, SafeAreaView, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/Navigation/BottomTab';
import {useGetWeather} from './src/hooks/useGetWeather';

const App = () => {
  const [weather, loading, error] = useGetWeather();
  // console.log('weather:', weather);

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {loading ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} color="royalblue" />
          </View>
        ) : (
          <BottomTab weather={weather} error={error} />
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;

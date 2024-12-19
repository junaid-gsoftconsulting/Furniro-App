/**
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationStack from './navigation/NavigationStack';
import BottomTabNavigation from './navigation/BottomTabNavigation';

import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  useTheme,
} from 'react-native-paper';
import {Provider, useSelector} from 'react-redux';
import {store} from './store/store';
import {defaulTheme} from './themes/DefaultTheme';
import {darkTheme} from './themes/DarkTheme';

const NavigationContainer = () => {
  const isDark = useSelector(state => state.theme.isDark);
  const chnageTheme = isDark ? darkTheme : defaulTheme;
  return (
    <PaperProvider theme={chnageTheme}>
      <View
        style={{
          flex: 1,
        }}>
        <NavigationStack />
      </View>
    </PaperProvider>
  );
};

function EntryPoint(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 1,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default EntryPoint;

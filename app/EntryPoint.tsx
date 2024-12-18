/**
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationStack from './navigation/NavigationStack';
import BottomTabNavigation from './navigation/BottomTabNavigation';

function EntryPoint(): React.JSX.Element {
  return (
    <SafeAreaProvider style={{marginTop:60}}> 
    <StatusBar />
    <BottomTabNavigation/>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default EntryPoint;

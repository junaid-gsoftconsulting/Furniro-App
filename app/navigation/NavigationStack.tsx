import React from 'react';
import Home from '../screens/Home';
import CategoriesScreen from '../screens/Categories';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import {StatusBar, StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';

// const NavigationScreens = () => {
//     const Stack = createNativeStackNavigator()
//   return (
//     <Stack.Navigator initialRouteName='Home'>
//     <Stack.Screen name ="Home" component={Home} options={{
//       headerShown:false
//     }}
//     />
//     <Stack.Screen name='Categories' component={CategoriesScreen} />
//     </Stack.Navigator>
//   )
// }
const NavigationStack = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <StatusBar />
      <BottomTabNavigation />
    </NavigationContainer>
  );
};
export default NavigationStack;

// const styles = StyleSheet.create({
//   container:{
//     flex:1,

//   }
// })

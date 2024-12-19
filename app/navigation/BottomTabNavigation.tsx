import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Profile from '../screens/Profile';
import Products from '../screens/Products';
import NavigationStack from './NavigationStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CategoriesScreen from '../screens/Categories';
import BottomTab from './BottomTab';
import Cart from '../screens/Cart';
import Blog from '../screens/Blog';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      //  style={{ backgroundColor: 'green' }}
      //  activeColor="red"
      screenOptions={{
        headerShown: false,
      }}
      tabBar={() => <BottomTab />}>
      <Tab.Screen name="NavigationScreens" component={NavigationScreens} />
    </Tab.Navigator>
  );
};

const NavigationScreens = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};
const BottomTabNavigation = () => {
  return <TabNavigation />;
};

export default BottomTabNavigation;

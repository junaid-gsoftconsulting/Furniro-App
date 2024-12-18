import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Profile from '../screens/profile';
import Products from '../screens/products';
import NavigationStack from './NavigationStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CategoriesScreen from '../screens/categories';
import BottomTab from './BottomTab';



const TabNavigation = () =>{
    const Tab = createBottomTabNavigator();
    return (
     <Tab.Navigator 
    //  style={{ backgroundColor: 'green' }}
    //  activeColor="red"
    tabBar={BottomTab}
     >
     <Tab.Screen name='Home' component={NavigationScreens} />
     </Tab.Navigator>
    );
}

const NavigationScreens = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name ="Home" component={Home} options={{
      headerShown:false
    }}
    />
    <Stack.Screen name='Categories' component={CategoriesScreen} />
    </Stack.Navigator>
  )
}
const BottomTabNavigation = () =>{
    return (
        <NavigationContainer>
            <TabNavigation/>
        </NavigationContainer>
    )
}

export default BottomTabNavigation

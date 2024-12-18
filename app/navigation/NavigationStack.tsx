import React from 'react'
 import Home from '../screens/Home'
import CategoriesScreen from '../screens/categories'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigation from './BottomTabNavigation'

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
const NavigationStack = ()=>{
  // return (

    <BottomTabNavigation/>
  // )
}
export default NavigationStack;

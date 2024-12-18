import {useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Home = () =>  {
  const navigation = useNavigation<any>();
  const categoriesHandler = () =>{
    navigation.navigate("Categories",{
      itemId:90,
      otherParam:"my first react native app"
    })
  }
    return (
      <View style={{flex:1,backgroundColor:"red"}}>
        <Text style={{color:"red"}}>Home screen </Text>
        <Pressable onPress={categoriesHandler}><Text>Move to Categories Screen</Text></Pressable>
      </View>
    )
}
export default Home

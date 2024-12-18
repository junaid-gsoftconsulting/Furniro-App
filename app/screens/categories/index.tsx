import React, { Component } from 'react'
import { Text, View } from 'react-native'

const CategoriesScreen = ({route}) =>  {
  const {itemId, otherParam} = route.params
    return (
      <View style={{flex:1,backgroundColor:"red"}}>
        <Text>Categories Screen</Text>
        <Text>{itemId}</Text>
        <Text>{otherParam}</Text>
      </View>
    )
}

export default CategoriesScreen

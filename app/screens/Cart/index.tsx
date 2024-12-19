import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Cart = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <View><Text>Cart Screen {count}</Text></View>
  )
}

export default Cart

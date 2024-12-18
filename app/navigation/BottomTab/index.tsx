import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const BottomTab = () => {
  return (
      <View style={styles.container}>
       <View style={styles.bottomTab1}>
     <Text>Home</Text>
       
    <FontAwesome name="home" size={30} color="#900" />
    </View>
    <View style={styles.bottomTab2}>
        <Text>Products</Text>
    </View>
    <View style={styles.bottomTab2}>
        <Text>Profile</Text>
    </View>
   </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({
container:{
    backgroundColor:'green',
   display:"flex",
   flexDirection:"row",
   justifyContent:"space-around",
   height:60
},
bottomTab1:{
    backgroundColor:"pink",
    padding:4,
},
bottomTab2:{
    backgroundColor:"gray",

}
})
import { Button, Text, TouchableOpacity, View } from "react-native"

const Hero = () =>{
    return(
        <View style={{marginTop:10,backgroundColor:"blue"}}>
        <Text style={{color:"black"}}>
            Welcome to the counter app
        </Text>
        <TouchableOpacity style={{padding:10, backgroundColor:"gray"}}><Text>Move to products page</Text></TouchableOpacity>
        </View>
    )
}
export default Hero
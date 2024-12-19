import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {useStyle} from './styles';

const BottomTab = () => {
  const navigation = useNavigation<any>();
  const styles = useStyle();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome name="home" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <FontAwesome name="shopping-cart" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Blog')}>
        <Fontisto name="blogger" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <AntDesign name="contacts" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTab;

import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../store/slice/CounterSlice';
import {changeTheme} from '../../store/slice/ThemeSlice';
import {RootState} from '@reduxjs/toolkit/query';
import {useTheme} from 'react-native-paper';

const Home = () => {
  const [dark, setDark] = useState(true);
  const navigation = useNavigation<any>();
  const theme = useTheme();
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  const categoriesHandler = () => {
    navigation.navigate('Categories', {
      itemId: 90,
      otherParam: 'my first react native app',
    });
  };
  const isDark = useSelector(state => state?.theme?.isDark);
  console.log('theme', isDark);
  const themeChangeHandler = () => {
    setDark(!dark);
    dispatch(changeTheme(dark));
  };
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.backgroundColor}}>
      <Text style={{color: 'red'}}>Home screen </Text>
      <Pressable onPress={categoriesHandler}>
        <Text>Move to Categories Screen</Text>
      </Pressable>
      <View>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text style={{fontSize: 80}}>-</Text>
        </TouchableOpacity>
        <Text> cvjwv {Number(count)}</Text>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text style={{fontSize: 80}}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={themeChangeHandler}>
          <Text> Click to chnage the theme</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;

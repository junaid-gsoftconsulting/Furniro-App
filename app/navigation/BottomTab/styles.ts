import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

import {vs, s} from 'react-native-size-matters';
export const useStyle = () => {
  const theme = useTheme();
  const styles = () =>
    StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: vs(70),
        borderTopWidth: s(1),
        borderTopColor: 'black',
        backgroundColor: theme.colors.secondary,
      },
    });
  return styles();
};

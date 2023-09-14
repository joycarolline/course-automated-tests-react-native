import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';

interface IProps {
  token: string;
}

const BottomTab = ({token}: IProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Home', {
            token: token,
          })
        }>
        <Image source={require('../../assets/Home.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Profile', {
            token: token,
          })
        }>
        <Image source={require('../../assets/Profile.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Image source={require('../../assets/Logout.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 6,
    height: 50,
    maxHeight: 60,
    borderColor: colors.gray[100],
    borderTopWidth: 1,
  },
});

export default BottomTab;

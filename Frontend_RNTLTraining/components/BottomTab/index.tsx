import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import colors from '../../theme/colors';

interface IProps {
  token: string;
}

const BottomTab = ({token}: IProps) => {
  const navigation = useNavigation();

  return (
    <BlurView style={styles.container} blurType="light" blurAmount={3}>
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
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 6,
    height: 60,
    maxHeight: 60,
    borderColor: colors.gray[100],
    borderTopWidth: 1,
  },
});

export default BottomTab;

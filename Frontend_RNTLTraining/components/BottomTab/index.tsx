import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import colors from '../../theme/colors';

interface IProps {
  token: string;
}

const BottomTab = ({token}: IProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
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
        <TouchableOpacity>
          <Image source={require('../../assets/Logout.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    maxHeight: 85,
    paddingTop: 10,
    paddingLeft: 6,
    paddingRight: 6,
    borderColor: colors.gray[100],
    borderTopWidth: 1,
  },
});

export default BottomTab;

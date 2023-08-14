import { StyleSheet, Text, View } from 'react-native';

export default ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

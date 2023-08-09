import {StyleSheet, Text, View, Button} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Bem-Vindo!</Text>
      <Button
        title="Acessar seu Perfil"
        onPress={() => navigation.navigate('Profile', {name: 'Vinicius'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

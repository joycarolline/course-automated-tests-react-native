import {View, Image, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

const WelcomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require('../assets/Logo.png')} style={styles.image} />
        <Button variant="outlined" label="Entrar" mt={10} />
        <Button variant="contained" label="Cadastro" mt={30} />
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 24,
    width: 240,
    height: 240,
  },
});

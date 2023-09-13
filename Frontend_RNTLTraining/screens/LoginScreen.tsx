import React, {useState} from 'react';
import {login} from '../api/login';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Alert,
  Platform,
  Text,
  View,
} from 'react-native';
import Input from '../components/Input';
import Form from '../components/Form';
import {useNavigation} from '@react-navigation/native';
import colors from '../theme/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<{
    navigate: (screen: string, params?: {token: string}) => void;
  }>();

  const handleLogin = async () => {
    const res = await login(email, password);

    if (res?.token) {
      Alert.alert('Sucesso', 'Voce está logado.', [
        {
          text: 'OK',
        },
      ]);
      return navigation.navigate('Home', {token: res.token});
    }

    return Alert.alert('Erro', res.data?.message ?? 'Erro inesperado');
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Image
          source={require('../assets/Logo.png')}
          style={{width: 205, height: 175, marginBottom: 60}}
        />
        <Form buttonText="Entrar" onSubmit={handleLogin}>
          <Input
            label="E-mail"
            onChangeText={text => setEmail(text)}
            value={email}
            name={'email'}
          />
          <Input
            label="Senha"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
            name={'senha'}
          />
        </Form>

        <View style={styles.containerRegister}>
          <Text>Novo aqui?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            accessibilityLabel="Cadastre-se!">
            <Text style={styles.textRegister}> Cadastre-se!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  containerRegister: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,

    position: 'absolute',
    bottom: 30,
  },
  textRegister: {
    color: colors.secondary,
  },
});

export default LoginScreen;

import React, {useState} from 'react';
import {login} from '../api/login';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Alert,
  Platform,
  Text,
} from 'react-native';
import Input from '../components/Input';
import Form from '../components/Form';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<{
    navigate: (screen: string, params?: {token: string}) => void;
  }>();

  const handleLogin = async () => {
    const res = await login(email, password);

    if (res?.token) {
      Alert.alert('Sucesso', 'Voce está logado.');
      return navigation.navigate('Home', {token: res.token});
    }

    return Alert.alert('Erro', res.data?.message ?? 'Erro inesperado');
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 300, height: 250}}
        />
        <Form buttonText="Entrar" onSubmit={handleLogin}>
          <Input
            label="E-mail"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <Input
            label="Senha"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />
        </Form>
        <Text>Desenvolvido pela Turma</Text>
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
});

export default LoginScreen;

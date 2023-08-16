import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Input from './components/Input';
import Form from './components/Form';
import {login} from './api/login';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    for (let i = 0; i < 100; i++) {
      const res = await login('Admin', 'admin');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <Image
          source={require('./assets/logo.png')}
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

export default App;

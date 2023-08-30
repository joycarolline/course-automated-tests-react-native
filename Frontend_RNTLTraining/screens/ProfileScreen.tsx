import {useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {useForm} from 'react-hook-form';
import Input from '../components/Input';
import {profile} from '../api/profile';
import {RouteProp, useRoute} from '@react-navigation/native';
import jwt_decode from 'jwt-decode';

type ParamList = {
  Profile: {
    token: string;
  };
};

const ProfileScreen = () => {
  const {params} = useRoute<RouteProp<ParamList, 'Profile'>>();
  const {register, control, handleSubmit} = useForm({
    defaultValues: async () => {
      const fields = jwt_decode(params.token) as any;

      return {
        name: fields?.name,
        email: fields?.email,
        password: fields?.password,
        birthday: fields?.birthday,
      };
    },
  });

  const onSubmit = async (payload: any) => {
    const {token} = params;

    try {
      await profile(token, payload);
      Alert.alert('Sucesso!', 'Perfil atualizado');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao atualizar perfil');
    }
  };

  useEffect(() => {
    register('email');
    register('password');
    register('birthday');
    register('name');
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../assets/Logo.png')} />

      <Input control={control} label="Nome" name="name" />
      <Input control={control} label="E-mail" name="email" />
      <Input control={control} label="Senha" name="password" />
      <Input control={control} label="Data de Nascimento" name="birthday" />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText} accessibilityLabel="Salvar">
          Salvar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
    padding: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    backgroundColor: '#f45',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

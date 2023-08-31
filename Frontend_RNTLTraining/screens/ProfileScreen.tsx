import {useEffect} from 'react';
import {
  SafeAreaView,
  View,
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
import colors from '../theme/colors';
import BottomTab from '../components/BottomTab';
import {Button} from '../components/Button';

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
    <SafeAreaView>
      <Image style={styles.image} source={require('../assets/Logo.png')} />
      <View style={styles.container}>
        <Text style={styles.title}>Editar perfil</Text>
        <View style={styles.formInput}>
          <Text style={styles.label}>Nome</Text>
          <Input control={control} name="name" />
        </View>

        <View style={styles.formInput}>
          <Text style={styles.label}>E-mail</Text>
          <Input control={control} name="email" />
        </View>

        <View style={styles.formInput}>
          <Text style={styles.label}>Senha</Text>
          <Text style={styles.labelDescription}>
            A senha deve conter entre 4 e 8 caracteres e conter números e
            letras.
          </Text>
          <Input control={control} name="password" />
        </View>

        <Button
          label="Salvar"
          variant="outlined"
          onPress={handleSubmit(onSubmit)}
          accessibilityLabel="Salvar"
        />
        <TouchableOpacity>
          <Text style={styles.buttonText}>Deletar conta</Text>
        </TouchableOpacity>
      </View>
      <BottomTab token={params.token} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    minHeight: '85%',
  },
  formInput: {
    alignItems: 'flex-start',
    width: '100%',
    paddingBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.gray[1000],
    marginLeft: 3,
  },
  labelDescription: {
    fontSize: 12,
    marginBottom: 5,
    color: colors.gray[600],
    marginLeft: 3,
    width: '90%',
  },
  image: {
    height: 120,
    width: 120,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    color: colors.gray[1000],
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f45',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 14,
    marginTop: 15,
    color: colors.gray[600],
  },
});

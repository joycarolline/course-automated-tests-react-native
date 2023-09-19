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
import {useRoute} from '@react-navigation/native';
import colors from '../theme/colors';
import {Button} from '../components/Button';
import {useNavigation} from '@react-navigation/native';

type ParamList = {
  Profile: {
    token: string;
  };
};

const RegisterScreen = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const {register, control, handleSubmit} = useForm();

  const onSubmit = async (payload: any) => {
    try {
      // await profile(token, payload);
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
      <Text style={styles.title}>Bem-vindo,</Text>
      <Text style={styles.description}>
        Preencha as informaçōes abaixo para realizar seu cadastro
      </Text>
      <View style={styles.formContainer}>
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
          label="Cadastrar"
          variant="outlined"
          onPress={handleSubmit(onSubmit)}
          accessibilityLabel="Cadastrar"
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Já possui uma conta?</Text>
          <Text style={styles.clickHereText}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  formContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  formInput: {
    alignItems: 'flex-start',
    width: '100%',
    paddingBottom: 5,
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
    height: 140,
    width: 140,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.gray[1000],
    marginBottom: 6,
    marginLeft: 20,
  },
  description: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 15,
    marginLeft: 20,
  },
  button: {
    backgroundColor: '#f45',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonLogin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    marginTop: 15,
    color: colors.gray[600],
  },
  clickHereText: {
    fontSize: 14,
    marginTop: 15,
    color: colors.secondary,
    marginLeft: 6,
  },
});

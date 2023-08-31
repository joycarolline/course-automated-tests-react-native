import {PropsWithChildren} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {Button} from '../Button';
import colors from '../../theme/colors';

interface IProps {
  buttonText: string;
  onSubmit: () => void;
}

const Form = ({children, buttonText, onSubmit}: PropsWithChildren<IProps>) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.containerForgotPassword}>
        <Text>Esqueceu a senha?</Text>
        <TouchableOpacity onPress={() => {}} accessibilityLabel="Clique aqui!">
          <Text style={styles.textForgotPassword}> Clique aqui!</Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={onSubmit}
        variant="outlined"
        accessibilityLabel="Botão de entrar"
        label={buttonText}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f45',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
  containerForgotPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 38,
  },
  textForgotPassword: {
    color: colors.secondary,
  },
});

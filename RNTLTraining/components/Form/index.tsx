import {PropsWithChildren} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface IProps {
  buttonText: string;
  onSubmit: () => void;
}

const Form = ({children, buttonText, onSubmit}: PropsWithChildren<IProps>) => {
  return (
    <View style={styles.container}>
      {children}

      <TouchableOpacity
        // onPressOut={() => {
        //   console.log('Boa noite turma!');
        // }}
        onPress={onSubmit}
        style={styles.button}
        accessibilityLabel="Botão de entrar">
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: 300,
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
});

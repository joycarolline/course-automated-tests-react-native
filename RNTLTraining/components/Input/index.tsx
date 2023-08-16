import React, {useState} from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

interface IProps extends TextInputProps {
  label: string;
}

const Input = ({label, ...rest}: IProps) => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      style={styles.container}
      placeholder={label}
      onChangeText={text => setValue(text)}
      value={value}
      {...rest}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#e4e4e4',
    marginBottom: 12,
    width: '100%',
  },
});

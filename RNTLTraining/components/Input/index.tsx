import React, {useState} from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

interface IProps extends TextInputProps {
  label: string;
  name?: string;
  control?: any;
}

const Input = ({
  label,
  name,
  onChange,
  onBlur,
  defaultValue,
  control,
  ...rest
}: IProps) => {
  const [value, setValue] = useState('');

  return control ? (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value: controlledValue}}) => (
        <TextInput
          style={styles.container}
          placeholder={label}
          placeholderTextColor="#888888"
          onChangeText={onChange}
          value={controlledValue}
          defaultValue={defaultValue}
          {...rest}
        />
      )}
      name={name}
    />
  ) : (
    <TextInput
      style={styles.container}
      placeholder={label}
      placeholderTextColor="#888888"
      onChangeText={text => setValue(text)}
      value={value}
      defaultValue={defaultValue}
      {...rest}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#bbb',
    marginBottom: 12,
    width: '100%',
  },
});

import React, {useState} from 'react';
import {TextInput, TextInputProps, StyleSheet, View} from 'react-native';
import {Controller} from 'react-hook-form';
import colors from '../../theme/colors';

interface IProps extends TextInputProps {
  label?: string;
  name: string | any;
  control?: any;
  iconRight?: React.ReactNode;
}

const Input = ({
  label,
  name,
  onChange,
  onBlur,
  defaultValue,
  control,
  iconRight,
  ...rest
}: IProps) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.wrapper}>
      {control ? (
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
      )}
      <View style={styles.iconRight}>{iconRight ?? null}</View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 10,
    marginBottom: 12,
    width: '100%',
    backgroundColor: colors.white,
  },
  iconRight: {
    position: 'absolute',
    right: 10,
    top: 4,
  },
});

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Welcome = () => {
  const [count, setCount] = useState(0);

  const incrementNumber = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Bem Vindo Turma!</Text>
      <Text>Você clicou {count} vezes</Text>

      <Button
        title="Clique aqui"
        onPress={incrementNumber}
        accessibilityLabel="Clique aqui para incrementar o número"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default Welcome;

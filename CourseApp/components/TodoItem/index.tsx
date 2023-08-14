import { useState } from 'react';
import { View, Text, Button } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './styles';

type Props = {
  item: {
    id: string;
    title: string;
  };
};

const limitTitle = (title: string) => {
  const limit = 25;
  if (title.length > limit) {
    return title.substring(0, limit) + '...';
  }
  return title;
};

const TodoItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container} testID="todo-item">
      <View style={styles.description}>
        <Text style={styles.title} testID="todo-title">
          {limitTitle(item.title)}
        </Text>
        <BouncyCheckbox
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Feito"
          iconStyle={{ borderColor: 'red' }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={(isChecked: boolean) => {
            setIsChecked(isChecked);
          }}
          style={{ marginTop: 10 }}
          testID="todo-done"
          isChecked={isChecked}
        />
      </View>
      <View>
        <Button title="Ver mais" onPress={() => {}} />
      </View>
    </View>
  );
};

export default TodoItem;

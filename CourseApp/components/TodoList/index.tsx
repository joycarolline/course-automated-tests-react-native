import { FlatList } from 'react-native';
import TodoItem from '../TodoItem';
import styles from './styles';

type Props = {
  list: {
    id: string;
    title: string;
  }[];
};

const TodoList = ({ list }: Props) => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <TodoItem item={item} />}
      keyExtractor={item => item.id}
      style={styles.flatList}
    />
  );
};

export default TodoList;

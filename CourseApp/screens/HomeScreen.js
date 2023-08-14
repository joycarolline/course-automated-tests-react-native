import { StyleSheet, Text, View, Button } from 'react-native';
import TodoList from '../components/TodoList';
import { getTodoList } from '../api/todo.api';
import { useEffect, useState } from 'react';

export default HomeScreen = ({ navigation }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoList = async () => {
      const todoList = await getTodoList();
      setTodoList(todoList);
    };
    fetchTodoList();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Acessar seu Perfil"
        onPress={() => navigation.navigate('Profile', { name: 'Vinicius' })}
      />
      <TodoList list={todoList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

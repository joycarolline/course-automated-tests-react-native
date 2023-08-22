import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  FlatList,
  Text,
} from 'react-native';
import {fakenews} from '../api/fakenews';
import {RouteProp, useRoute} from '@react-navigation/native';

type FakeNews = {
  id: string;
  title: string;
  description: string;
  image: string;
  published_at: string;
  author: string;
};
type ItemProps = {
  fields: FakeNews;
};

const Item = ({fields}: ItemProps) => {
  const publishedAt = new Date(fields.published_at);
  return (
    <View
      style={styles.item}
      key={fields.id}
      accessibilityLabel={`Item da fakenews ${fields.title}`}>
      <Image
        accessibilityLabel={`Imagem da fakenews ${fields.title}`}
        source={{uri: fields.image}}
        style={{width: 50, height: 50}}
      />
      <View style={styles.fakenews}>
        <Text accessibilityLabel={`${fields.title}`} style={styles.title}>
          {fields.title}
        </Text>
        <Text
          accessibilityLabel={`Descrição da fakenews ${fields.title}`}
          style={styles.description}>
          {fields.description}
        </Text>
        <Text
          accessibilityLabel={`Data da Publicação da fakenews ${fields.title}`}
          style={styles.published_at}>
          Publicado: {publishedAt.toLocaleDateString('pt-br')}
        </Text>
        <Text
          accessibilityLabel={`Autor da fakenews ${fields.title}`}
          style={styles.author}>
          Autor: {fields.author}
        </Text>
      </View>
    </View>
  );
};

type ParamList = {
  Home: {
    token: string;
  };
};

const HomeScreen = () => {
  const [listFakeNews, setListFakeNews] = useState<FakeNews[]>([]);
  const {params} = useRoute<RouteProp<ParamList, 'Home'>>();

  useEffect(() => {
    const getFakeNews = async () => {
      const res = await fakenews(params.token);
      setListFakeNews(res);
    };

    getFakeNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={listFakeNews}
        renderItem={({item}) => <Item fields={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  fakenews: {
    marginLeft: 10,
    width: '100%',
    flex: 1,
  },
  item: {
    backgroundColor: '#e2e2e2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
  },
  published_at: {
    fontSize: 12,
    marginTop: 10,
  },
  author: {
    fontSize: 10,
    textAlign: 'right',
  },
});

export default HomeScreen;

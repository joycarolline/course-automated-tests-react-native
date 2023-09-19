import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {fakenews} from '../api/fakenews';
import {RouteProp, useRoute} from '@react-navigation/native';
import {FakeNews, Item} from '../components/Item';
import {storeData, getData, updateData} from '../hooks/db';
import Input from '../components/Input';
import BottomTab from '../components/BottomTab';
import About from '../components/About';

type ParamList = {
  Home: {
    token: string;
  };
};

const HomeScreen = () => {
  const [listFakeNews, setListFakeNews] = useState<FakeNews[]>([]);
  const [filteredListFakeNews, setFilteredListFakeNews] = useState<FakeNews[]>(
    [],
  );
  const {params} = useRoute<RouteProp<ParamList, 'Home'>>();

  const [search, setSearch] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);

  const likeFunction = async (id: string, value: number) => {
    await updateData(id, value);
  };

  const openAbout = () => {
    setVisibleModal(true);
    return;
  };

  useEffect(() => {
    const getFakeNews = async () => {
      const cacheData = await getData('fakenews_list');

      if (!cacheData) {
        const res = await fakenews(params.token);

        await storeData('fakenews_list', res);
        setListFakeNews(res);
        return;
      }
      console.log(cacheData);
      setListFakeNews(cacheData);
    };

    getFakeNews();
  }, []);

  useEffect(() => {
    const filter = () => {
      if (search == '' || !search) {
        setListFakeNews(listFakeNews);
        return;
      }

      const filteredValue = listFakeNews.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredListFakeNews(filteredValue);
    };

    filter();
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={openAbout}>
          <Image
            source={require('../assets/Three_dots.png')}
            style={styles.threeDots}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerSearch}>
        <Input
          label="Pesquisar"
          name="search"
          iconRight={<Image source={require('../assets/Search.png')} />}
          onChangeText={e => {
            setSearch(e);
          }}
          value={search}
        />
      </View>

      <Text style={styles.lastNews}>Últimas notícias</Text>

      <FlatList
        data={
          filteredListFakeNews?.length == 0
            ? listFakeNews
            : filteredListFakeNews
        }
        renderItem={({item}) => (
          <Item fields={item} onPressLike={likeFunction} />
        )}
        ListEmptyComponent={() => (
          <Text style={{padding: 20}}>Nenhuma notícia encontrada!</Text>
        )}
        keyExtractor={item => item.id}
      />
      <BottomTab token={params.token} />
      <About
        visible={visibleModal}
        onClose={() => {
          setVisibleModal(false);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginLeft: 10,
  },
  containerSearch: {
    paddingHorizontal: 20,
  },
  threeDots: {
    marginRight: 10,
  },
  lastNews: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  profileButton: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    marginLeft: 20,
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

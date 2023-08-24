import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {fakenews} from '../api/fakenews';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {FakeNews, Item} from '../components/Item';
import {storeData, getData, updateData} from '../hooks/db';

type ParamList = {
  Home: {
    token: string;
  };
};

const HomeScreen = () => {
  const [listFakeNews, setListFakeNews] = useState<FakeNews[]>([]);
  const {params} = useRoute<RouteProp<ParamList, 'Home'>>();
  const navigation = useNavigation<{
    navigate: (screen: string, params?: {token: string}) => void;
  }>();

  const likeFunction = async (id: string, value: number) => {
    await updateData(id, value);
  };

  const profileScreen = () => {
    return navigation.navigate('Profile', {token: params.token});
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

      setListFakeNews(cacheData);
    };

    getFakeNews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.profileButton} onPress={profileScreen}>
        <Text>Meu Perfil</Text>
      </TouchableOpacity>
      <FlatList
        data={listFakeNews}
        renderItem={({item}) => (
          <Item fields={item} onPressLike={likeFunction} />
        )}
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

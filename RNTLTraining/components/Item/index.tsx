import {useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {getData} from '../../hooks/db';

export type FakeNews = {
  id: string;
  title: string;
  description: string;
  image: string;
  published_at: string;
  author: string;
  like?: number;
};

type ItemProps = {
  fields: FakeNews;
  onPressLike: (key: string, value: number) => Promise<void>;
};

export const Item = ({fields, onPressLike}: ItemProps) => {
  const publishedAt = new Date(fields.published_at);

  const [countLikes, setCountLikes] = useState(0);

  useEffect(() => {
    const getLikes = async () => {
      const likes = (await getData(fields.id)) ?? 0;

      setCountLikes(likes);
    };

    getLikes();
  }, []);

  const handleCount = async (id: string) => {
    const likeCount = countLikes + 1;

    setCountLikes(likeCount);

    await onPressLike(id, likeCount);
  };

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
        <View style={styles.likeContainer}>
          <Text style={styles.likeCount}>{countLikes} Curtidas</Text>
          <TouchableOpacity
            accessibilityLabel="Botão Adicionar Like"
            onPress={async () => await handleCount(fields.id)}>
            <Image
              source={require('../../assets/thumbsup.png')}
              style={styles.likeButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  likeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 30,
  },
  likeButton: {
    width: 20,
    height: 20,
  },
  likeCount: {
    fontSize: 12,
    marginRight: 15,
    marginTop: 9,
  },
});

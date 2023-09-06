import {useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';

import {getData} from '../../hooks/db';
import colors from '../../theme/colors';

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
      <View style={styles.content}>
        <Image
          accessibilityLabel={`Imagem da fakenews ${fields.title}`}
          source={{uri: fields.image}}
          style={{width: 80, height: 80, marginRight: 10}}
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

      <View style={styles.separator} />

      <View style={styles.likeContainer}>
        <TouchableOpacity
          accessibilityLabel="Botão Adicionar Like"
          onPress={async () => await handleCount(fields.id)}
          style={styles.buttonHighlight}>
          <Image
            source={require('../../assets/Thumb_up.png')}
            style={styles.likeButton}
          />
          <Text style={{marginLeft: 6}}>Curtir</Text>
        </TouchableOpacity>
        <Text style={styles.likeCount}>{countLikes} Curtidas</Text>
        <TouchableOpacity
          accessibilityLabel="Botão Compartilhar"
          onPress={async () => {}}
          style={styles.buttonHighlight}>
          <Image
            source={require('../../assets/Reply.png')}
            style={styles.likeButton}
          />
          <Text style={{marginLeft: 6}}>Compartilhar</Text>
        </TouchableOpacity>
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: colors.gray[100],
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  description: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    width: '100%',
    color: colors.gray[600],
    marginTop: 4,
  },
  published_at: {
    fontSize: 12,
    marginTop: 10,
    color: colors.gray[400],
  },
  author: {
    fontSize: 10,
    textAlign: 'right',
    marginTop: 10,
  },
  likeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
  },
  buttonHighlight: {
    backgroundColor: colors.lightblue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 30,
    color: colors.gray[800],
    minWidth: 90,
    fontSize: 10,
    justifyContent: 'center',
  },
  likeButton: {
    width: 18,
    height: 15,
  },
  likeText: {
    color: colors.secondary,
  },
  likeCount: {
    fontSize: 12,
    marginRight: 25,
    color: colors.gray[400],
    textAlign: 'center',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.gray[100],
    marginVertical: 10,
  },
});

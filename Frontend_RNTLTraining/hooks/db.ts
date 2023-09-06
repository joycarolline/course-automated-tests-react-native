import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    const a = await AsyncStorage.setItem(key, jsonValue);
    console.log(a);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const updateData = async (key: string, value: any) => {
  try {
    await AsyncStorage.removeItem(key);
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('Erro: ', e);
  }
};

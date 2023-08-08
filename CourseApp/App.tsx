import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import {Screen} from 'react-native-screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

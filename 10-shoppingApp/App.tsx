import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigations
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Screens/Home';
import Details from './Screens/Details';

//Creating types for different screens
export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product};
};

//This app is just the revision of navigations in native app
export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

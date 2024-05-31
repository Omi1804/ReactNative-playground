//This app is just the revision of navigations in native app
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
  Details: {product: Product}; //we defines the interface Product in the index.d.ts file
};

//declaring the stack
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Trending Products',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Product Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

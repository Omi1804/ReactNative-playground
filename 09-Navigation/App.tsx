import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Screens/Home';
import Details from './Screens/Details';

//we learn here about react native navigation -- thrugh react Navigation --> https://reactnavigation.org/
//Must React --> Navigation Lifecycle

//things we need to install firsts are -
// - npm install @react-navigation/native
// - npm install react-native-screens react-native-safe-area-context
// - npm install @react-navigation/native-stack

//Types for Screens (given in the documentations)
export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

//creating the navigation Stack (read the doc)
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

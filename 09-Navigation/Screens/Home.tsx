import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//nvaigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

//Here to define the types in Home Screen we use this syntax
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

//as soon as we use this react navigation each screen will get props of navigation
export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          //using this onPress we can navigate and we have different options for navigation though stack (like push, replace etc...)
          //here we use navigate and firstly we pass the screen in which we want to navigate and then props with it
          navigation.navigate('Details', {productId: '8644'})
        }></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});

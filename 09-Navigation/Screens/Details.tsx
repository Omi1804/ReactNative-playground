import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

//as we have done navigation in home page through navigation prop
//we can also do navigation through hooks
//here we use hooks method for the navigation
//Both are right in there own ways

export default function Details({route}: DetailsProps) {
  //invoking the hook with right set of types
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const {productId} = route.params;

  return (
    <View style={styles.container}>
      <Text>Details : {productId}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}></Button>
      <Button
        title="Go One Screen Back"
        onPress={() => navigation.goBack()}></Button>
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

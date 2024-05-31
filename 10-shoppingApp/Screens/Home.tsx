import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import ProductItem from '../Components/ProductItem';
import Separator from '../Components/Separator';

import {PRODUCTS_LIST} from '../Data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator} //this shows the sepration between each items of the list
        //this render whole item and then send user to details page if clicked with items details as a props
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

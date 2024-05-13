//shorcut for reactnative boilder plate code is - rnfe
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';

//Project Flat Cards
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

//shorcut for reactnative boilder plate code is - rnfe
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCards from './Components/FancyCards';
import ActionCards from './Components/ActionCards';
import ContactList from './Components/ContactList';

//Project Flat Cards
const App = () => {
  return (
    <SafeAreaView style={{margin: 8}}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCards />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

/*
>>>Npm packages required are :
- react navigation n all its related packages along with native stack
- for theme we use npm i @rneui/themed and npm i @rneui/base 
- npm i react-native-config --> to properly install this package we need to install settings given in the package for android/gradle --> it is just like .env package
- npm i react-native-snackbar
- vector/icons
- npm i appwrite **
*/
import React from 'react';
import AppwriteProvider from './appwrite/AppwriteContext';
import Router from './routes/Router';

export default function App() {
  return (
    <AppwriteProvider>
      <Router />
    </AppwriteProvider>
  );
}

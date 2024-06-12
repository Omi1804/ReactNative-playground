import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AppwriteContext} from '../appwrite/AppwriteContext';
import Loading from '../components/Loading';

//Routes
import AppStack from './AppStack';
import AuthStack from './AuthStack';

export default function Router() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppwriteContext);

  useEffect(() => {
    appwrite;
  }, [appwrite, setIsLoggedIn]);

  return (
    <View>
      <Text>Router</Text>
    </View>
  );
}

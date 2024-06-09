import {StyleSheet, Text, View} from 'react-native';
import React, {FC, PropsWithChildren, createContext, useState} from 'react';

import AppwriteService from './service';

type AppContextType = {
  appwrite: AppwriteService;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

//creating the context first
export const AppwriteContext = createContext<AppContextType>({
  appwrite: new AppwriteService(),
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

//now we create the provider
const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //creating the default value for provider
  const defaultValue = {
    appwrite: new AppwriteService(),
    isLoggedIn: false,
    setIsLoggedIn: () => {},
  };

  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  );
};

export default AppwriteProvider;

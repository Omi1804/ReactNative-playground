import React from 'react';

import {View, Text, StyleSheet, useColorScheme} from 'react-native';

//Hello world with stylings

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'; //this is the way to figure out is the phone is in dark mode or light mode

  return (
    <View style={styles.containers}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;

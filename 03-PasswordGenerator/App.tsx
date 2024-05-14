import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup'; // For form validation in client side more like Zod

//password Generator Application

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characteres')
    .max(16, 'Should be max of 16 characteres')
    .required('Length is required'), // here we give parameter with the error message to show if parameter fails
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatedPasswordString = (passwordLength: number) => {};

  const createPassword = (characters: string, passwordLength: number) => {};

  const resetPassword = () => {};

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

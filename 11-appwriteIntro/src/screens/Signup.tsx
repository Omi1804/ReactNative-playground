import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useState} from 'react';

//react native styling elements
import {FAB} from '@rneui/themed';
import Snackbar from 'react-native-snackbar';

//context API
import {AppwriteContext} from '../appwrite/AppwriteContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from '@rneui/base';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../routes/AuthStack';

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

const Signup = () => {
  const {appwrite, setIsLoggedIn} = useContext(AppwriteContext);
  const [error, setError] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');

  const handleSignup = () => {
    if (
      name.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      repeatPassword.length < 1
    ) {
      setError('All fields are required');
    } else if (password !== repeatPassword) {
      setError('Passwords do not match');
    } else {
      const user = {
        email,
        password,
        name,
      };
      appwrite
        .createAccout(user)
        .then(res => {
          if (res) {
            setIsLoggedIn(true);
            Snackbar.show({
              text: 'Signup success',
              duration: Snackbar.LENGTH_SHORT,
            });
          }
        })
        .catch(e => {
          console.log(e);
          setError(e.message);
        });
    }
  };

  return (
    <View>
      <Text>Signup</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});

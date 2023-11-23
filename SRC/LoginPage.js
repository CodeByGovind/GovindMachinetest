import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelLogin = async () => {
    if (!email || !password) {
      alert('please enter email and password');
      return;
    }

    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);
    console.log(email, password);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>LoginPage</Text>
      <TextInput
        style={styles.txtInput}
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.txtInput}
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" color="#3300ff" onPress={handelLogin} />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  txt: {
    fontSize: 25,
    textAlign: 'center',
    color: '#3300ff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  txtInput: {
    paddingLeft: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
});

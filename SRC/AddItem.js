import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const AddItem = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onPress = () => {
    if (!title || !body) {
      alert('please enter title and description');
      return;
    }
    navigation.navigate({
      name: 'Home',
      parmas: {title: title, body: body},
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>AddItem</Text>
      <TextInput
        style={styles.txtInput}
        placeholder="title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.txtInput}
        placeholder="description"
        value={body}
        onChangeText={setBody}
      />
      <Button title="Add item" color="#3300ff" onPress={onPress} />
    </View>
  );
};

export default AddItem;

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

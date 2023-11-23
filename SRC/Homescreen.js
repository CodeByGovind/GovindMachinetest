import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Homescreen = ({navigation, route}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setItems(response.data);
      } catch (error) {
        console.error(error, 'error');
      }
    };
    fetchData();
  }, []);

  const AddNewItem = ({title, body}) => {
    route.parmas?.title;
    route.parmas?.body;
    setItems(prevItem => [...prevItem, title, body]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('AddItem', {AddNewItem})}>
        <Text style={styles.txt}>Add Item</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemcontainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  btn: {
    backgroundColor: '#3300ff',
    justifyContent: 'center',
    borderRadius: 15,
  },
  txt: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    margin: 15,
  },
  itemcontainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#f8efef',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    textTransform: 'capitalize',
    fontStyle: 'italic',
    fontSize: 22,
    color: '#2e2525',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  body: {
    fontSize: 18,
    textAlign: 'justify',
    fontStyle: 'italic',
    color: 'hsl(226, 20%, 20%)',
    fontWeight: '400',
    marginBottom: 5,
  },
});

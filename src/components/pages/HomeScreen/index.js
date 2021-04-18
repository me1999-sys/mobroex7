import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from '../../molecules/Card';
import Axios from 'axios';
import Button from'../../atoms/Button';
const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Fetch
    // fetch('https://reqres.in/api/users')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data));
    //Axios
    Axios.get(' http://10.0.2.2:3006/users').then(res => 
    setUsers(res.data)
    
      
    );
  }, [users]);  
  const handleSubmit = () =>{
    const data ={
      email: 'palangan@gmail.com',
      first_name: 'Meyva',
      last_name:'Palangan',
      avatar:"https://source.unsplash.com/random",
    };
Axios.post(' http://10.0.2.2:3006/users',data)
  };
return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Button label="Tambah" onSubmit={handleSubmit}/>
        {users.map(item => (
          <Card
          key={item.id}
          avatar={item.avatar} 
           fullname={`${item.first_name} ${item.last_name}`}
           email={item.email}          
           
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
});
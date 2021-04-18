import React, { useState } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import Axios from 'axios';

const Register = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
const handleSubmit = () => {
    const data = {
        avatar: "https://picsum.photos/seed/picsum/200/300",
        email: email,
        first_name: firstName,
        last_name: lastName
      };
      Axios.post(' http://10.0.2.2:3006/users', data);
    
};

return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>
      <Gap height={30} />
      <ScrollView showsVerticalScrollIndicator={false}>
      
      <TextInput value={firstName} label="First name" placeholder="Masukan first name anda" onChangeText={ e => setFirstName(e)} />
      <Gap height={20} />
      <TextInput  value={lastName} label="Last Name" placeholder="Masukan last name anda" onChangeText={e => setLastName(e)}/>
      <Gap height={20} />
      <TextInput  label="Email" value={email}  placeholder="Masukan email anda" 
       onChangeText={ e => setEmail(e)}/>
      <Gap height={25} />

      <Button label="Add User" onSubmit ={() => handleSubmit()} />
      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  }
});

export default Register;
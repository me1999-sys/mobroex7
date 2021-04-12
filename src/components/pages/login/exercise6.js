import React, { useState } from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import { SearchSource } from '@jest/core';

const App = () => {
const [name, SetName] = useState('');
const [username, SetUserName] = useState('');
const [email, SetEmail] = useState('');
const [Address, SetAddress] = useState('');
const [phonenumber, SetPhoneNumber] = useState('');
const handleSubmit = () => {
const data = {
  name:name,
  username:username,
  email: email,
  Address:Address,
  phonenumber:phonenumber,
};
console.log(data);
};

return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <Gap height={10} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <TextInput value={name}label="Name" placeholder="Masukan nama lengkap anda" onChangeText={e => SetName(e)} />
      <Gap height={10} />
      <TextInput value={username}label="Username" placeholder="Masukan username anda" onChangeText={e => SetUserName(e)} />
      <Gap height={10} />
      <TextInput value={email}label="Email" placeholder="Masukan email anda" onChangeText={e => SetEmail(e)}/>
      <Gap height={10} />
      <TextInput value={Address}label="Address" placeholder="Masukan alamat anda" onChangeText={e => SetAddress(e)}/>
      <Gap height={10} />
      <TextInput value={phonenumber}label="Phone Number" placeholder="Masukan nomor telpon anda" onChangeText={e => SetPhoneNumber(e)}/>
      <Gap height={15} />
      
      <Button label="Register" onSubmit ={() => handleSubmit()} />
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
  },
});

export default App;
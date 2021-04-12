import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import { SearchSource } from '@jest/core';

const App = () => {
const [welcome, Setwelcome] = useState('welcome');

const handleSubmit = () => {
Setwelcome('selamat datang');
};

return (
    <View style={styles.container}>
      <Text style={styles.title}>{welcome}</Text>
      <Gap height={40} />
      <TextInput label="Username" placeholder="Masukan username anda" />
      <Gap height={24} />
      <TextInput label="Password" placeholder="Masukan password anda" />
      <Gap height={48} />
      <Button label="Sign In" onSubmit ={() => handleSubmit()} />
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
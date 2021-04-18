import React from 'react';
import {StyleSheet, Text, View, TextInput as Input} from 'react-native';

const TextInput = ({label, placeholder,value,onChangeText}) => {
  return (
    <View>
      <Text style={styles.labelInput}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} value ={value} onChangeText={onChangeText}/>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  labelInput: {
    fontSize: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 24,
    paddingVertical: 4,
    marginTop: 5,
    height:35,
  },
});
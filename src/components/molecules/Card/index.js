import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({fullname,username, email, address,phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{fullname}</Text>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.phone}>{phone}</Text>
      
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
  fullname: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
});
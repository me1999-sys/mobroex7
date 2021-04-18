import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

const Card = ({fullname, email, avatar}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.avatar} source={{uri: `${avatar}`}} />
     <View style={styles.cardWrapper}>
     <Text style={styles.fullname}>{fullname}</Text>
      <Text style={styles.email}>{email}</Text>
      
     </View>
      
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection:'row',
  },
  cardWrapper:{
    marginLeft: 10,
    justifyContent:'center',
  },
  fullname: {
    
    fontSize: 20,
    fontWeight:'bold',
    color: 'black',
    marginTop: 10,

  },
  email: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,

  },
  
  avatar: {
    borderRadius: 100,
    height: 100,
    width: 100,
    marginTop: 10,

  }});
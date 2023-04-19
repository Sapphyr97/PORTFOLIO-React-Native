import React from 'react';
import {View, Text,StyleSheet,Image} from "react-native";

function Title() {
return (
  <View style={styles.container}>
     <Text style={styles.text}>PETITS BISCUITS</Text> 
     <Image style={styles.image} source={require('./IMG_20210729_093024.jpg')} />
      
      
    </View>
)}
export default Title;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text:{
    fontSize:35,
    padding:10,
    fontWeight:'bold',
    color:'#A0522D',
    textDecorationLine: 'underline',
  },
  image:{
    width:350,
    height:150,
    borderRadius:10
  }
})
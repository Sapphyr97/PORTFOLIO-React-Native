import React from 'react';
import {View, Text,StyleSheet,} from "react-native";



function Identite (){
return (
  <View style={styles.container}>
        <Text style={styles.nom}>ERLONG</Text>
        <Text style={styles.prenom}>Laïna</Text>
        <Text style={styles.description}>C'est trop cool</Text>
    </View>
)}

export default Identite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFFACD'
  },
  nom:{
    fontSize:50,
    padding:10,
    fontWeight:'bold',
    textDecorationLine: 'underline',
    color:'gold',
   
  },
  prenom:{
    fontSize:40,
    padding:10,
    fontWeight:'bold'
  },
  description:{
    fontSize:20,
    padding:30,
  }
})
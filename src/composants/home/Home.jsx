import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Contact from './Contact';
import Avatar from './Avatar';
import Identite from './Identite';


const Home = ({ }) => {
  return (
     <View style={{flex:1,fleDirection:'column'}}>

        <View style={{flex: 0.5}}>
            <Avatar/>
        </View>
        <View style={{flex: 2, backgroundColor: 'white'}}>
            <Identite/>
        </View>
        <View >
            <Contact/>
        </View>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Avatar = ({ }) => {
    const [avatar, setAvatar] = useState(null);
  
  /*Code pour l'image Avatar*/
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setAvatar(result.assets[0].uri);
      }
    };
  
    return (
       <View style={styles.container}>
              <TouchableOpacity onPress={pickImage}>
                      {avatar ? (
                      <Image source={{ uri: avatar }} style={styles.avatar} />
                      ) : (
                      <View style={styles.avatarPlaceholder}>
                          <Text style={styles.avatarPlaceholderText}>Sélectionner un avatar</Text>
                      </View>
                      )}
              </TouchableOpacity>
      </View>
    );
  };
 
  export default Avatar;
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor:'#EEE8AA',
          alignItems: 'center',
          justifyContent: 'center',
      },
      avatar: {
          width: 100,
          height: 100,
          borderRadius: 50,
          marginLeft: 20,
          
      },
      avatarPlaceholder: {
          width: 100,
          height: 100,
          borderRadius: 150,
          backgroundColor: '#ccc',
          alignItems: 'center',
          justifyContent: 'center',
      },
      avatarPlaceholderText: {
          color: '#fff',
          textAlign: 'center',
      }
  });
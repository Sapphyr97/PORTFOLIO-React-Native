import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ExperienceJson from './ExperiencesJson.json'

const Experiences = () => {
  const [groupes, setGroupes] = useState([]);

  useEffect(() => {
    setGroupes(ExperienceJson);
  }, []);

  const afficherCartes = () => {
    return groupes.map((groupe, index) => (
      <View key={index} style={styles.carte}>
        <Text style={styles.titre}>{groupe["nom Entreprise"]}</Text>
        <Text>{groupe["année"]}</Text>
        <Text>{groupe["poste"]}</Text>
        <Text>{groupe["description"]}</Text>
      </View>
    ));
  }

  return (
      <View>
          <Text style={styles.title}>Ma formation et mes expériences professionnelles</Text> 
            <ScrollView contentContainerStyle={styles.scrollConteneur}>           
                <View style={styles.container}>
                    {afficherCartes()}
                </View>
            </ScrollView>
     </View> 
  );
}

const styles = StyleSheet.create({
  
  scrollConteneur: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    },
  carte: {
    backgroundColor: '#ADD8E6',
    marginBottom:30,
    padding:20,
    borderRadius:8,
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
    backgroundColor: '#ADD8E6',
  }
});

export default Experiences;
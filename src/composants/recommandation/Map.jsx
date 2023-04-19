import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View,Text} from 'react-native';

export default function Maps() {
  return (
    <View style={styles.containerMap}>
      <Text style={styles.text}>Lieu de PETIT BISCUIT</Text>
      <MapView initialRegion={{
                latitude: 49.45178506168125,
                longitude:  -1.719010480700905,
                latitudeDelta: 48.849648,
                longitudeDelta: 2.621903,
            }} style={styles.map} >
        
        <Marker
          coordinate={{latitude: 49.45178506168125, longitude: -1.719010480700905}}
        />

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMap: {
    backgroundColor: '#FDF5E6',
    padding:20,
    borderRadius:8,
    paddingLeft:50,
    paddingRight:50, 
    marginTop:5
  },
  text:{
    fontSize:20
    
  },
  map: {
    width: 200,
    height: 200,
    margin:20
  },
});
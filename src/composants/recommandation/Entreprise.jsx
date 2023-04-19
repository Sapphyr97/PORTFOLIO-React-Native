import React from 'react';
import { View,  StyleSheet,ImageBackground ,ScrollView} from 'react-native';




import Title from './Title';
import Commentaires from './Commentaires';
import Maps from './Map';






const Entreprise = ({ }) => {
  return (
    <ScrollView>
     <View style={styles.container}>
        <ImageBackground source={require('./istockphoto-1176898042-612x612.jpg')} style={styles.image}>
            <View style={styles.container1}>
                <Title/>
            </View>
            <View style={styles.container2}>
                <Commentaires/>
            </View>
            <View style={styles.container3}>
                <Maps/>
            </View>
        </ImageBackground>
      
    </View>
  </ScrollView>
  );
};

export default Entreprise;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },

    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        
        borderRadius:5
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
     
    },
 
});
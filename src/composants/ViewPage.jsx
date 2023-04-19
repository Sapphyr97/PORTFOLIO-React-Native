import React from 'react';
import { StyleSheet, View, Text,ImageBackground } from 'react-native';
import PagerView from 'react-native-pager-view';

import Home from './home/Home';
import Experiences from './experiences/Experiences';
import Entreprise from './recommandation/Entreprise';

const ViewPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
      <ImageBackground source={require('./12356544.webp')} style={styles.image}>
            <View style={styles.page} key="1">
                <Text style={styles.text}>MON PORTFOLIO</Text>
            </View>
        </ImageBackground>
        <View style={styles.page} key="2">
          <Home/>
        </View>
        <View style={styles.page} key="3">
         <Experiences/>
        </View>
        <View style={styles.page} key="4">
          <Entreprise/>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize:40,
    alignItems: 'center',
    top:50
  }
});

export default ViewPage;
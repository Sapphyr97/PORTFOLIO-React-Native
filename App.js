import { StyleSheet, View ,StatusBar} from 'react-native';
import ViewPage from './src/composants/ViewPage';
// import { StatusBar } from 'expo-status-bar';




export default function App() {
  return (
    <View style={{flex:1}}>
        <StatusBar />
     <ViewPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

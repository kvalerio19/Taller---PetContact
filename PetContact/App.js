import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
//import { Header } from 'react-native/Libraries/NewAppScreen';
import Screen from './components/screen';


export default function App() {
  
  return (
    <View  style={styles.container}>
      <Text style={styles.titleText}>PET CONTACT</Text>
      <MapView style={styles.map} 
          initialRegion={{
          latitude: 9.928069,
          longitude: -84.090725,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        />
        
      </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 1,
    marginTop: 95,
    color: '#fff',
    fontSize: 30,
    backgroundColor: '#2ec76e',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#2ec76e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    //marginTop: 740,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});



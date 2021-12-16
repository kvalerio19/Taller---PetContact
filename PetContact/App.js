import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
//import { Header } from 'react-native/Libraries/NewAppScreen';
import Screen from './components/screen';

export default function App() {
  return (
    <View >
      <Text style={styles.titleText}>PET CONTACT</Text>
        <Screen></Screen>
        
      </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 1,
    marginTop: 20,
    color: '#fff',
    fontSize: 30,
    backgroundColor: '#2ec76e',
    textAlign: 'center',
  },
});



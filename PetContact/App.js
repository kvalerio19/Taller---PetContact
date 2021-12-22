import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView, Button } from 'react-native';
//import { Button} from 'react-native-paper';


export default function App() {
  
  return (
    
    <View  style={styles.container}>
      
      <Text style={styles.titleText}>PET CONTACT</Text>
      <TextInput style={styles.input} placeholder='Search Veterinarian'></TextInput>
      { <MapView style={styles.map} 
          initialRegion={{
          latitude: 9.928069,
          longitude: -84.090725,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        
        /> }
        
        
        <SafeAreaView style={styles.button}>
          <View>
            
            <Button title='Navigate'></Button>
          </View>
        </SafeAreaView>
      </View>
      
     
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 1,
    marginTop: 150,
    color: '#fff',
    fontSize: 30,
    backgroundColor: '#2ec76e',
    textAlign: 'center',
  },

  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#fff',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    flexDirection: 'row',
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
  button: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'#2ec76e',
    flexDirection:'row',
    height:80,
    alignItems:'center',
    justifyContent:'center',
  
  },
});



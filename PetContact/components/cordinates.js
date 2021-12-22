import React from "react";
import MapView from "react-native-maps";
import {StyleSheet, Dimensions, Image} from 'react-native'

const height = Dimensions.get('window').height
    
    const response = [
      {
        id: '1',
        coordinates: {
          latitude: 10.020716019979705,
          longitude: -84.12205902574738,
          
        },
        title: 'Veterinaria San Rafael',
        description: 'Veterinaria San rafael',
        
      },
      {
        id: '2',
        coordinates: {
          latitude: 10.002525032821517,
          longitude: -84.11491641329359,
           
        },
        title: 'Veterinaria PetContact',
        description: 'Veterinaria PetContact',
        category: 1, 
      },
      {
        id: '3',
        coordinates: {
          latitude: 9.992944036439859,
          longitude: -84.1176256800884,
           
        },
        title: 'Veterinaria Herediana',
        description: 'Veterinaria Herediana',
        category: 1,   
      },
      {
        id: '4',
        coordinates: {
          latitude: 10.008147879756375,
          longitude: -84.13210361246803,
          
        },
        title: 'Veterinaria Pets',
        description: 'Veterinaria Pets',
        category: 1, 
      },
      {
        id: '5',
        coordinates: {
          latitude: 10.001726511899152,
          longitude: -84.10805543055218,
          
        },
        title: 'Veterinaria Cats',
        description: 'Veterinaria Cats',
        category: 1, 
      },
      {
        id: '6',
        coordinates: {
          latitude: 9.995540670293133,
          longitude: -84.09645008885519, 
        },
        title: 'Veterinaria Dogs',
        description: 'Veterinaria Dogs',
        category: 1,
      
      },
      
    ]
    
    const Map = () => {
      return (
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: 9.928069,
          longitude: -84.090725,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          }}
        >
          {response.map(marker => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            >
              <Image source={ marker.icon } style={{ height: 32, width: 32 }} />
            </MapView.Marker>
          ))}
        </MapView>
      )
    }
    
    const styles = StyleSheet.create({
      map: {
        height
      }
    })
    
    export default Map
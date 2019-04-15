import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class LocationScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Location',
      };
      
    render() {
        return (
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <Text style={{paddingLeft: 20, padding: 20}}>your location: </Text>
              <Text style={{paddingLeft: 20, padding: 20}}>location</Text>
            </View>
          );
    };
}

const styles = StyleSheet.create({
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
      },
  })

export default LocationScreen;
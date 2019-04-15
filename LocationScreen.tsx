import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LocationFetcher } from './LocationFetcher';

class LocationScreen extends React.Component {
    private locationFetcher = new LocationFetcher();
    private location: String = "location";
    static navigationOptions = {
        title: 'Location',
      };

    constructor(props: Readonly<{}>) {
      super(props);
      this.state = {locationArrived: false};
      this.locationFetcher.getCurrentLocation((location) => {
        this.location = location;
        this.setState(previousState => ({
          locationArrived: false
         }));
       })
    };
      
    render() {
        return (
            <View style={{ flexDirection: 'row', paddingLeft: 0}}>
              <Text style={{paddingLeft: 20, padding: 20}}>your location: </Text>
              <Text style={{paddingLeft: 20, padding: 20}}>{this.location}</Text>
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
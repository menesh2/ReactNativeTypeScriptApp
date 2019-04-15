import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {LocationFetcher} from './LocationFetcher'

class LocationScreen extends React.Component<any> {

    private locationFetcher = new LocationFetcher();
    private location: String = "location";
    static navigationOptions = {
        title: 'Location',
    };

    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {locationArrived: false};
        this.locationFetcher.getCurrentLocation((location: any) => {
            this.location = location;
            this.setState(previousState => ({
                locationArrived: false
            }));
        })
    };

    render() {

        return (
            <View>
                <View  style={{flexDirection: 'row', paddingLeft: 0}}>
                    <Text style={{paddingLeft: 20, padding: 20}}>your location: </Text>
                    <Text style={{paddingLeft: 20, padding: 20}}>{this.location}</Text>
                </View>
                <Button
                    title="Next"
                    onPress={() => this.props.navigation.navigate('InternetPlanScreen')}
                />
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
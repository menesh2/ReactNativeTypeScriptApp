import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {LocationFetcher} from './LocationFetcher'
import CustomButton from "./app/components/button/CustomButton";

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
                <View style={{flexDirection: 'row', paddingLeft: 0}}>
                    <Text style={{paddingLeft: 20, padding: 20}}>your location: </Text>
                    <Text style={{paddingLeft: 20, padding: 20}}>{this.location}</Text>
                </View>
                <CustomButton text={"Next"}
                    onPress={() => this.props.navigation.navigate('InternetPlanScreen')}
                />
            </View>
        );
    };
}

export default LocationScreen;


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { requireNativeComponent } from 'react-native';

const CustomView = requireNativeComponent("CustomView");


class BillingScreen extends Component {

    static navigationOptions = {
        title: 'Billing Information',
    };
    render() {
        return (
            <View style={{flex: 1}}>
                <CustomView style={{flex: 1}} count={2} />
            </View>
        );
    }
}


export default BillingScreen;
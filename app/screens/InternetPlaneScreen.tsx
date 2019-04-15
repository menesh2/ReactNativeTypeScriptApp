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
import {Platform, StyleSheet, Text, View} from 'react-native';
import Plan from "./Plan";

export class InternetPlaneScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Plan name={'ANNUAL'} price={'19.95$/mo'} promotionText={'SAVE 20%'}></Plan>
                <Plan name={'MONTHLY'} price={'25.95$/mo'} promotionText={'SAVE 10%'}></Plan>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    plan: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
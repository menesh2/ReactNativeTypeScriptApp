import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import * as React from 'react';

interface IPlan {
    name: string;
    price: string;
    promotionText: string;
}

export default class Plan extends Component<IPlan> {
    render() {
        return (
            <View style={styles.plan}>
                <Text>{this.props.name}!</Text>
                <Text>{this.props.price}!</Text>
                <Text>{this.props.promotionText}!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    plan: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6ab4b796',
    },

});
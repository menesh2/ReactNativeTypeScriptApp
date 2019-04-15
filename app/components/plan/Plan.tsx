import {Component} from "react";
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import * as React from 'react';

interface IPlan {
    name: string;
    price: string;
    promotionText: string;
    onPress?: () => void
}


class Plan extends Component<IPlan> {

    constructor(props: IPlan) {
        super(props)

        this.state = {
            backgroundColor: '#6ab4b796'
        };
    }

    onClick = ()=> {
        this.setState({backgroundColor: '#ffffff'});
    }

    render() {
        return (
            <TouchableHighlight
                style={[styles.plan, {backgroundColor: this.state.backgroundColor}]}
                onPress={this.onClick}>
                <View>
                    <Text>{this.props.name}!</Text>
                    <Text>{this.props.price}!</Text>
                    <Text>{this.props.promotionText}!</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    plan: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6ab4b796',
        padding: 20,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: 80
    },

});

export default Plan;
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {COLOR_PRIMARY, BORDER_RADIUS} from './../../../styles/common.styles';
import * as React from 'react';

interface IButton {
    onPress: () => void,
    text: string
}

class CustomButton extends React.Component <IButton> {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.3}
                style={styles.button}
                onPress={this.props.onPress}>
                <Text> {this.props.text} </Text>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: COLOR_PRIMARY,
        padding: 10
    },
});


export default CustomButton;
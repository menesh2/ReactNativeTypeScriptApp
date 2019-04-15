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
import Plan from "../components/plan/Plan";
import CustomButton from "../components/button/CustomButton";
import BillingScreen from "./BillingScreen";

class InternetPlanScreen extends React.Component<any> {

    static navigationOptions = {
        title: 'Internet Plan',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.plansContainer}>
                    <Plan name={'ANNUAL'} price={'19.95$/mo'} promotionText={'SAVE 20%'}></Plan>
                    <Plan name={'MONTHLY'} price={'25.95$/mo'} promotionText={'SAVE 10%'}></Plan>
                </View>
                <CustomButton text={"Continue To Billing"}
                              onPress={() => this.props.navigation.navigate('BillingScreen')}
                />
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
    plansContainer: {
        flex: 0.9,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    }
});

export default InternetPlanScreen;
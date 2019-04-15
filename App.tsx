/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LocationScreen from './LocationScreen'
import InternetPlanScreen from "./app/screens/InternetPlanScreen";


const MainNavigator = createStackNavigator({
        LocationScreen: {screen: LocationScreen},
        InternetPlanScreen: {screen: InternetPlanScreen}

    },
    {
        initialRouteName: "LocationScreen"
    });

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
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
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import {createStackNavigator, createAppContainer} from 'react-navigation';
import LocationScreen from './LocationScreen'
import InternetPlanScreen from "./app/screens/InternetPlanScreen";
import BillingScreen from "./app/screens/BillingScreen";


const MainNavigator = createStackNavigator({
        LocationScreen: {screen: LocationScreen},
        InternetPlanScreen: {screen: InternetPlanScreen},
        BillingScreen: {screen: BillingScreen}
    },
    {
        initialRouteName: "LocationScreen"
    });

const App = createAppContainer(MainNavigator);

export default App;
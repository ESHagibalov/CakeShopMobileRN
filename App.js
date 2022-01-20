// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from "./src/context/CartContext";
import AllCakesSearchScreen from "./src/screens/AllCakesSearchScreen";
import CartScreen from "./src/screens/CartScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";


// const navigator = createStackNavigator(
//     {
//         AllCakes: AllCakesSearchScreen,
//         Cart: CartScreen,
//         Profile: ProfileScreen,
//     },
//     {
//         initialRouteName: "AllCakes",
//         defaultNavigationOptions: {
//             title: "Cakes",
//         },
//     }
// );
//
// const App = createAppContainer(navigator);
//
// export default () => {
//     return (
//         <Provider>
//             <App/>
//         </Provider>
//     );
// };

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName;

                        if (route.name === 'Cakes') {
                            iconName = 'cake';
                        } else if (route.name === 'Cart') {
                            iconName = 'shopping-cart';
                        } else if (route.name === 'Profile') {
                            iconName = 'face';
                        }
                        return <MaterialIcons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Cakes" component={AllCakesSearchScreen}/>
                <Tab.Screen name="Cart" component={CartScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default () => {
    return (
        <Provider>
            <App/>
        </Provider>
    );
}

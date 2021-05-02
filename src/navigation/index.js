import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import React from 'react';
import HomeBottomTabNavigator from './homeBottomTabNavigator';

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions ={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Tab" component={HomeBottomTabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;
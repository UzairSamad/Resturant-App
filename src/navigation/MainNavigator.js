import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Menu, DishDetail, MainComponent } from '../components/Screens'



export default function MainNavigator() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainComponent} options={{ headerTitleAlign: 'center' }} />
                <Stack.Screen name="Detail" component={DishDetail} options={{ title: 'DishDetail', headerTitleAlign: 'center' }} />

            </Stack.Navigator>
        </NavigationContainer>);
}
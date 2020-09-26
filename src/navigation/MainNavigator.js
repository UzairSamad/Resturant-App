import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Menu, DishDetail, MainComponent, Home, About, Contact } from '../components/Screens'
import { Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'



export default function MainNavigator() {
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator()

    const StackScreens = (props) => {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{
                    title: 'Home', headerTitleAlign: 'center',
                }} />
                <Stack.Screen name="List" component={MainComponent} options={{ title: 'List', headerTitleAlign: 'center' }} />
                <Stack.Screen name="Detail" component={DishDetail} options={{ title: 'DishDetail', headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        )
    }

    return (

        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" children={StackScreens} options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="home"
                            type='font-awesome'
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
                <Drawer.Screen name="Menu" component={MainComponent} options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="list"
                            type='font-awesome'
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
                <Drawer.Screen name="Contact" component={Contact} options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="address-card"
                            type='font-awesome'
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
                <Drawer.Screen name="About" component={About} options={{ title: 'About', headerTitleAlign: 'center' }} options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="info-circle"
                            type='font-awesome'
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
            </Drawer.Navigator>
        </NavigationContainer>);
}
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Menu, DishDetail, MainComponent,Home ,About,Contact} from '../components/Screens'



export default function MainNavigator() {
    const Stack = createStackNavigator();
    const Drawer = createDrawerNavigator()

    const StackScreens = () => {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="List" component={MainComponent} options={{ title: 'Menu',headerTitleAlign: 'center' }} />
                <Stack.Screen name="Detail" component={DishDetail} options={{ title: 'DishDetail', headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home}  options={{ title: 'Home', headerTitleAlign: 'center' }} />
                <Drawer.Screen name="List"  children={StackScreens}  />
                <Drawer.Screen name="Contact"  component={Contact}  options={{ title: 'About', headerTitleAlign: 'center' }} />
                <Drawer.Screen name="About"  component={About}  options={{ title: 'About', headerTitleAlign: 'center' }} />
            </Drawer.Navigator>
        </NavigationContainer>);
}
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, DrawerItems, SafeAreaView } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { Menu, DishDetail, MainComponent, Home, About, Contact } from '../components/Screens'
import { Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { View, Text, Image, StyleSheet } from 'react-native';



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


    // custome drarwer here
    function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerHeader}>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../images/logo.png')} style={styles.drawerImage} />
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
                {/* if you want to add some thing extra you can use drawer item component */}
                {/* <DrawerItem
              label="Help"
              onPress={() => Linking.openURL('https://mywebsite.com/help')}
            /> */}
            </DrawerContentScrollView>
        );
    }


    return (

        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="Home" children={StackScreens} options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="home"
                            type='font-awesome'
                            size={22}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
                <Drawer.Screen name="Menu" component={MainComponent} options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="list"
                            type='font-awesome'
                            size={22}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
                <Drawer.Screen name="Contact" component={Contact} options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="address-card"
                            type='font-awesome'
                            size={22}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
                <Drawer.Screen name="About" component={About} options={{ title: 'About', headerTitleAlign: 'center' }} options={{
                    drawerIcon: ({ focused, size }) => (
                        <Icon
                            name="info-circle"
                            type='font-awesome'
                            size={22}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
            </Drawer.Navigator>
        </NavigationContainer>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});


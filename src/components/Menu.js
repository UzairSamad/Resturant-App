import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native'




function Menu(props) {
    const navigation = useNavigation() //YOU CAN SIMPLE NAVIGATE BY CALLING IT AND .NAVIGATE
    const route = useRoute() //RECEVING PROPS IN IT THROUGH MAIN APP COMPONENT NAVIGATIONS FUNC

    function handleClick(item) {
        console.log(item,'item')
        props.onPress(item.id)
        navigation.navigate('Detail', { item: item.id })
    }

    const renderMenuItem = ({ item, index }) => {
        return (
            <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                onPress={()=>(navigation.navigate('Detail', { item: item}))}
                leftAvatar={{ source: require('../images/uthappizza.png') }}
            />
        )
    }

    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id}

        />
    )
}

export default Menu
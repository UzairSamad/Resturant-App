import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native'
import { connect } from 'react-redux'
import { baseUrl } from '../shared/baseurl'

const mapStateToPorps = state => {
    return {
        dishes: state.dishes,
        promotions: state.promotions,
        leaders: state.leaders
    }
}




function Menu(props) {
    const navigation = useNavigation() //YOU CAN SIMPLE NAVIGATE BY CALLING IT AND .NAVIGATE
    const route = useRoute() //RECEVING PROPS IN IT THROUGH MAIN APP COMPONENT NAVIGATIONS FUNC

    function handleClick(item) {
        console.log(item, 'item')
        props.onPress(item.id)
        navigation.navigate('Detail', { item: item.id })
    }

    const renderMenuItem = ({ item, index }) => {
        return (
            <Tile
                key={index}
                title={item.name}
                caption={item.description}
                featured
                onPress={() => (navigation.navigate('Detail', { item: item }))}
                imageSrc={{ source: require('../images/uthappizza.png') }}
            />
        )
    }

    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id}
            // ListHeaderComponent={}

        />
    )
}

export default connect(mapStateToPorps)(Menu)
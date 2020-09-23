import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish(props) {
    const dish = props.dish
    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={require('../images/uthappizza.png')}
            >
                <Text style={{ margin: 10 }}>
                    {dish.description}
                </Text>
            </Card>

        )
    } else {
        return (
            <View>

            </View>
        )

    }

}



function DishDetail(props) {
    const { item } = props.route.params
    console.log(item, 'dishaa')
    return (
        <RenderDish dish={item} />
    )
}


export default DishDetail
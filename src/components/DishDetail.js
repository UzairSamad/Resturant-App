import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { COMMENTS } from '../shared/comments'
import { connect } from 'react-redux'
import { baseUrl } from '../shared/baseurl'

const mapStateToPorps = state => {
    return {
        dishes: state.dishes
    }
}


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
                <Icon
                    raised
                    reverse
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                />
            </Card>

        )
    } else {
        return (
            <View>

            </View>
        )

    }

}

function RenderComments(props) {

    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {

        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };

    return (
        <Card title='Comments' >
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


function DishDetail(props) {
    const [favourites, setFavourite] = React.useState([])

    const { item } = props.route.params
    console.log(item, 'dishaa')

    const markFavorite = (dishId) => {
        setFavourite([dishId])
    }


    return (
        <ScrollView>
            <RenderDish dish={item} favorite={favourites.some(el => el === item.id)}
                onPress={() => { markFavorite(item.id) }} />
            <RenderComments comments={COMMENTS.filter((comment) => comment.dishId === item.id)} />
        </ScrollView>

    )
}


export default connect(mapStateToPorps)(DishDetail)
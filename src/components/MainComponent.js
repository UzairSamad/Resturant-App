import React, { Component } from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail'
import { DISHES } from '../shared/dishes';
import { View } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this, this.setState({ selectedDish: dishId })
    }

    render() {
        return (
            <View style={{flex:1}}>

                <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
                {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
            </View>

        )
    }
}

export default Main
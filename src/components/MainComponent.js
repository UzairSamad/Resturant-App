import React, { Component } from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail'
import { DISHES } from '../shared/dishes';
import { View } from 'react-native';
import { fetchComments, fetchDishes, fetchLeaders, fetchPromos } from '../redux/ActionCreators'
import { connect } from 'react-redux'
import { baseUrl } from '../shared/baseurl'


const mapDispatchToProps = dispatch => {
    fetchDishes: () => dispatch(fetchDishes())
    fetchPromos: () => dispatch(fetchPromos())
    fetchLeaders: () => dispatch(fetchLeaders())
    fetchComments: () => dispatch(fetchComments())
}

const mapStateToPorps = state => {
    return {

    }
}
class Main extends Component {
    componentDidMount() {
        this.props.fetchComments()
        this.props.fetchDishes()
        this.props.fetchLeaders()
        this.props.fetchPromos()
    }
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
            <View style={{ flex: 1 }}>

                <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
                {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
            </View>

        )
    }
}

export default connect(mapStateToPorps, mapDispatchToProps)(Main)
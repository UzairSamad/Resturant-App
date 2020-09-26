import React, { Component } from 'react'
import { Text, View ,ScrollView} from 'react-native'
import { Card } from 'react-native-elements';
import { LEADERS } from '../shared/leaders'
import { ListItem, Avatar } from 'react-native-elements'



function About(props) {
    return (
        <View>


            <Card >
                <Card.Title>Our History</Card.Title>
                <Card.Divider />
                <View>
                    <Text style={{ margin: 5 }}>
                        Started in 2010,Ristorant Confusion quickly established it self as a icon of excellence in HongKong
                        Started in 2010,Ristorant Confusion quickly established it self as a icon of excellence in HongKong,
                    </Text>
                </View>
            </Card>
            <Card>
                <Card.Title>Corporate LeaderShip</Card.Title>
                <Card.Divider />

                <ScrollView>
                    {
                        LEADERS.map((val,i) => {
                            return (
                                <ListItem key={val.id} bottomDivider>
                                    <Avatar source={require('../images/logo.png')} />
                                    <ListItem.Content>
                                        <ListItem.Title>{val.name}</ListItem.Title>
                                        <ListItem.Subtitle>{val.description}</ListItem.Subtitle>
                                    </ListItem.Content>
                                </ListItem>
                            )
                        })
                    }
                </ScrollView>
            </Card>
        </View>
    )
}

export default About
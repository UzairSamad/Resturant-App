import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Card } from 'react-native-elements';


function Contact(props) {
    return (
        <Card
        featuredTitle="About Us"
        // image={require('../images/uthappizza.png')}

        >
            <Text style={{margin:5}}>121,Clear Water Bay Road</Text>
            <Text style={{marginBottom:5}}>Clear,Water Bay Koon Loon</Text>
            <Text style={{marginBottom:5}} >Tel: +12444444</Text>
            <Text style={{marginBottom:5}}>Fax: +22232323223</Text>
            <Text style={{marginBottom:5}}>Email: uzair@gmail.com</Text>

        </Card>
    )
}

export default Contact
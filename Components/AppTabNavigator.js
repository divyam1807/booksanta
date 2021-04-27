import * as React from 'react'
import{Image}from 'react-native'
import BookDonate from '../screens/BookDonate'
import BookRequest from '../screens/BookRequest'
import{createBottomTabNavigator}from 'react-navigation-tabs'

export const AppTabNavigator = createBottomTabNavigator({
    BookDonate:{screen:BookDonate,
    navigationOptions:{
        tabBarIcon:<Image source={require("../assets/bd.jpg")}style={{
            width:30,
            height:30
        }}/>
    }
    },
    BookRequest:{screen:BookRequest,
    navigationOptions:{
        tabBarIcon:<Image source={require("../assets/br.jpg")}style={{
            width:30,
            height:30
        }}/>
    }
    }
})


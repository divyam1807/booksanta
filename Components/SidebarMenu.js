import * as React from 'react'
import {View,StyleSheet,TouchableOpacity} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class SidebarMenu extends React.Component{
render(){
    return(
        <View>
<DrawerItems {...this.props}/>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('WelcomeScreen')
firebase.auth().signOut()
}}> 
<Text>
    LOG OUT
</Text>
</TouchableOpacity>
        </View>
    )
}


}
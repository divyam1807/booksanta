import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase';
import db from '../config';
import { Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class WelcomeScreen extends React.Component{

constructor(){
    super();
    this.state = {emailId:'',
                  password:'',
                  First_Name:'',
                  Last_Name:'',
                  Contact:'',
                  Address:'',
                  Confirm_Password:'',
                  isModelvisible:'false'
                
}
}
showmodel=()=>{
    return(
        <Model 
        animationType="fade"
        transparant={true}
        visible={this.state.isModelvisible}
        >
<View>
<ScrollView>
<KeyboardAvoidingView>
    <TextInput style={{
        border:'solid',
        width:200,
        height:50
    }}
    placeholder = "Enter First Name"
onChangeText={(text)=>{this.setState({
    First_Name:text
})}}
    />
    <TextInput style={{
        border:'solid',
        width:200,
        height:50
    }}
    placeholder = "Enter Last Name"
    onChangeText={(text)=>{this.setState({
        Last_Name:text
    })}}
    />

    
</KeyboardAvoidingView>
</ScrollView>



</View>

        </Model>
    )

}
usersignup=(emailId,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
  .then((response) => {
   alert("User id successfully created")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
   alert("Error")
  });
}
userlogin=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
  .then((userCredential) => {
    alert("User has successfully loginned")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error")
  });
}
    render(){
        return(
            <View>


<TextInput style={{
    width:200,
    height:80,
    border:'solid' 
}} 
placeholder = "Enter you emailId"
keyboardType = "email-address"
onChangeText={(text)=>{this.setState({
    emailId:text
})}}

/>


            <TextInput style={{
                width:200,
                height:80,
                border:'solid'
            }}
            placeholder = "Enter your password"
            secureTextEntry = {true}
            onChangeText={(text)=>{this.setState({
                password:text
            })}}
            
            
            />
<Button title="Sign Up" color="brown" onPress={()=>{this.usersignup(this.state.emailId,this.state.password)}}/> 
<Button title="Login" color="orange" onPress={()=>{this.userlogin(this.state.emailId,this.state.password)}}/>
            </View>
        )
    }
    
}
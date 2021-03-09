import * as React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput,KeyboardAvoidingView,Modal} from 'react-native'
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
        <Modal 
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
<TextInput style={{
    border:'solid',
    width:200,
    height:50
}}
placeholder = "Enter Contact Details"
keyboardType = "numeric"
onChangeText={(text)=>{this.setState({
Contact:text
})}}

/>
    
<TextInput style = {{
    border:'solid',
    width:200,
    height:50
}}
placeholder = "Enter address"
multiline={true}
onChangeText={(text)=>{this.setState({
    Address:text
})}}
/>

<TextInput style = {{
    border:'solid',
    width:200,
    height:50 
}}
placeholder = "Enter Email Id"
keyboardType="email-address"
onChangeText={(text)=>{this.setState({
    emailId:text
})}}
/>
<TextInput style={{
    border:'solid',
    width:200,
    height:50
}}
placeholder ="Enter password"
secureTextEntry={true}
onChangeText={(text)=>{this.setState({
    password:text
})}}
/>

<TextInput style={{
    border:'solid',
    width:200,
    height:50
}}
placeholder = "Confirm passsword"
secureTextEntry={true}
onChangeText={(text)=>{this.setState({
    Confirm_Password:text
})}}
/>
<Button title="SUBMIT" color="red" onPress={()=>{this.usersignup(this.state.emailId,this.state.password,this.state.Confirm_Password)}}/>



</KeyboardAvoidingView>
</ScrollView>



</View>

        </Modal>
    )

}
usersignup=(emailId,password,Confirm_Password)=>{
    if(password!=Confirm_Password){
        return alert("Password does not match")
    }
    else{
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
  .then(() => {
      db.collection("Users").add({
          First_Name:this.state.First_Name,
          Last_Name:this.state.Last_Name,
          Contact:this.state.Contact,
          Address:this.state.Address,
          emailId:this.state.emailId
      })
   alert("User id successfully created",
   '',
   [{text:'ok',onPress:()=>this.setState({"isModelvisible":false})}]
   )
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    
   alert("Error")
  });
}}
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
{this.showmodel()}

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
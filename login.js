import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Registration from './Registration';
import { Redirect } from 'react-router';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
 routeChange=()=> {
  let path = `/register`;
 
}
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />

           <TextField
            type="text"
             hintText="Enter your Username"
             floatingLabelText="UserID"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <br/>
             <h3>If not registered</h3>
             <RaisedButton label="Register" primary={true} style={style} href='/register'/>

         </div>
         </MuiThemeProvider>
      </div>
    );
    
  }
  handleClick(event){
 var apiBaseUrl = "https://event-management-backend0.herokuapp.com/auth/";
 var self = this;
 var payload={
 "username":this.state.username,
 "password":this.state.password
 }
 console.log(payload);
 axios.post(apiBaseUrl+'login', payload)
 .then(function (response) {
 console.log(response.data);
 if(parseInt(response.data) == 1){
   console.log("Login successfull");
    window.localStorage.setItem('username',payload.username);
    window.localStorage.setItem('password',payload.password);
    if(payload.username[0]==='C')
      window.location.href='/customer'
    else
      window.location.href='/admin'

 }
 else if(response.data.code == 204){
 console.log("Username password do not match");
 alert("username password do not match")
 }
 else{
 console.log("Username does not exists");
 alert("Username does not exist");
 }
 })
 .catch(function (error) {
 console.log(error);
 });
 }

 
}
const style = {
 margin: 15,
};
export default Login;


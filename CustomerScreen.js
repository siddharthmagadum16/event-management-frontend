import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import EventList  from './CutomerDetail';
import React from "react";
import { Input } from '@material-ui/core';
import Example from './CutomerDetail';
import { List } from 'material-ui';
import axios from 'axios';

class CustomerScreen extends React.Component {
  
  constructor(){
    super();
    this.state = {
      selectedValue: '',
        name: '',
        city:'',
        CustID:'',
        mailID:'',
       }
     
    
    this.handleChange = this.handleChange.bind(this);
    
  
    // axiosTest();
    
  } 
  
  renderSelectedForm(param) {
    switch(param) {
      case 'Marriage':
        return <MuiThemeProvider><form name="Marriage" id="Marriage" method='post' action='/marriage'>
              <label>Location: </label>
              <Input type="Text"/>
              <label>Budget: </label>
              <Input type="Number"/>
              <label>Religion: </label>
              <Input type="Text"/>
              <label>Bride Name: </label>
              <Input type="Text"/>
              <label>Groom Name: </label>
              <Input type="Text"/>
              <label>Start date: </label>
              <Input type="Date"/>
              <label>End Date: </label>
              <Input type="Date"/>
              <RaisedButton label="submit"></RaisedButton>
              </form>
              </MuiThemeProvider>
      case 'Birthdays':
        return <MuiThemeProvider><form name="Birthdays" id="Birthdays" >
              <label>Name: </label>
              <Input type="Text"/>
              <label>Budget: </label>
              <Input type="Number"/>
              <label>Age: </label>
              <Input type="Number"/>
              <label>Start date: </label>
              <Input type="Date"/>
              <label>End Date: </label>
              <Input type="Date"/>
              <RaisedButton label="submit"></RaisedButton>
              </form>
              </MuiThemeProvider>
      case 'General':
        return <MuiThemeProvider>
                <form name="General" id="General" >
              <label>Location: </label>
              <Input type="Text"/>
              <label>Budget: </label>
              <Input type="Number"/>
              <label>Purpose: </label>
              <Input type="Text"/>
              <label>Descriptipn: </label>
              <Input type="Text"/>
              <label>Start date: </label>
              <Input type="Date"/>
              <label>End Date: </label>
              <Input type="Date"/>
              <RaisedButton label="submit"></RaisedButton>
              </form>
              </MuiThemeProvider>
      default:
        return null;

    };
  }
 
  axiosTest (){
    const obj = {body: { customer_id: 'C00002'}}
    const url = 'https://event-management-backend0.herokuapp.com/api/event-details/get-all-event-details/'.concat('C00002');
    console.log(`URL: ${url}`)
    axios.get(url)
        .then(response => {
          
           
        }).catch( (error) => {
          console.log(error);
      });
       
  }
  componentDidMount() {
    const customer_id = window.localStorage.getItem("username");
    const url="https://event-management-backend0.herokuapp.com/api/event-details/get-all-event-details/".concat(customer_id);
    axios.get(url )
      .then(response=> {
        console.log(url)
        console.log(response.data);
                this.setState({ name: response.data[0].cust_name,
                CustID:  response.data[0].cust_id,
                mailID: response.data[0].email,
                city: response.data[0].cust_city});
        
       })
      
      .then(err => {
        console.log(err);
      })
      .catch(err =>{
        console.log(`ERR: ${err }`)
      })
  }






  handleChange(event) { this.setState({selectedValue: event.target.value}); }

  render() {
    

    return (
      <div>
        <div >
                <form >
                  <select value={this.state.selectedValue} onChange={this.handleChange}>
                      <option value=""></option>
                      <option value="Marriage">Marriage</option>
                      <option value="Birthdays">Birthdays</option>
                      <option value="General">General</option>
                  </select>
               </form>
        {this.renderSelectedForm(this.state.selectedValue)}
      </div>
      <h2>Name: {this.state.name}</h2>
      <h2>CustID: {this.state.CustID}</h2>
      <h2>mailID: {this.state.mailID}</h2>
      <h2>City: {this.state.city}</h2>
      </div>
      
    );
    }  
  };

export default CustomerScreen;

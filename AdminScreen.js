import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import React from "react";
import { Input } from '@material-ui/core';
import { render } from 'react-dom';
import MaterialTable from 'material-table';
class AdminScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = { EventID: '',
            details: {}
           };
  }

  componentDidMount() {
    const username =localStorage.getItem('username');
    const url="https://event-management-backend0.herokuapp.com/api/event-details/get-all-event-details/".concat(username);
    axios.get(url)
      .then(response => {
        this.setState({details: response.data})
        console.log(response.data)
      })
      .then(admins => {
        this.setState({ admins });
      })
      .then(err => {
        console.log(err);
      });
  }

  
columns_mgr=[
  {title:'EventID',field:'eid'},
  {title:'ManagerID',field:'m_id'},
  {title:'Phone no.',field:'mgr_phone_num'},
]
columns_ven_mgr=[
  {title:'Venue mgrID',field:'vid'},
  {title:'Contact',field:'venmgr_contact'},
  {title:'Commission',field:'venmgr_commission'},
  {title:'Venue mgrID',field:'vid'},
  {title:'Venue',field:'venue_name'},
  {title:'Venue mgr city',field:'venmgr_city'}
]
columns_decorator=[
  {title:'Decorator ID',field:'did'},
  {title:'Contact',field:'decr_contact'},
  {title:'Commission',field:'decr_commission'},
  {title:'Plan',field:'plan'},
  {title:'Special Requirement',field:'special_requirement'},
  {title:'Theme',field:'theme'},
  {title:'Venue mgr city',field:'venmgr_city'}
]
columns_caterer=[
  {title:'Caterer ID',field:'cid'},
  {title:'Contact',field:'ctr_contact'},
  {title:'Commission',field:'ctr_commission'},
  {title:'Style',field:'Style'},
  {title:'Cuisine',field:'cuisine'},
  {title:'#Plates',field:'num_plates'}
]

render()
    {
      console.log(this.state.details)
      return(
        <div>
        <MaterialTable
        title='Manager details'
        columns={this.columns_mgr}
        data={this.state.details}
      /> 
      <MaterialTable
      title='Venue details'
      columns={this.columns_ven_mgr}
      data={this.state.details}
    />
    <MaterialTable
      title='decorator details'
      columns={this.columns_decorator}
      data={this.state.details}
    />
    <MaterialTable
      title='Caterer details'
      columns={this.columns_caterer}
      data={this.state.details}
    />
    </div>
     )
    
    }


}

export default AdminScreen;

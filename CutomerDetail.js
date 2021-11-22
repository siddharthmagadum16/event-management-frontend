import React,{Component, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MaterialTable from 'material-table';
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
} from 'react-crud-table';
import { render } from '@testing-library/react';

// Component's Base CSS



class CustomerDetails extends React.Component {
  
  constructor(){
    super();
    this.state = {
      details:[]
       }
      }


  
componentDidMount(){
  const username =localStorage.getItem('username');
  axios.get("https://event-management-backend0.herokuapp.com/api/event-details/get-all-event-details/".concat(username))
  .then(response=> {
    this.setState({
      details: response.data,
      // event: response.data[0].event_name,
      // name:response.data[0].cust_name,
      // age:response.data[0].age,
      // eid: response.data[0].eid,
      // bid: response.data[0].eid,
      // gid: response.data[0].gid,
      // mid: response.data[0].mid,
      // start: response.data[0].start_date,
      // end: response.data[0].end_date,
      // budget: response.data[0].budget,
      // audience: response.data[0].audience,
      // religion: response.data[0].religion,
      // bride: response.data[0].bride_name,
      // groom: response.data[0].groom_name,
      // add_line1: response.data[0].line1,
      // add_line2: response.data[0].line2,
      // city: response.data[0].cust_city,
      // pin: response.data[0].pin,
      // entertainment: response.data[0].entertainment,
    })

  });
}



styles = {
  container: { margin: 'auto', width: 'fit-content' },
};

columns=[
  {title:'EventID',field:'eid'},
  {title:'Event',field:'event_name'},
  {title:'Budget',field:'budget'},
  {title:'Audience',field:'audience'},
  {title:'Start date',field:'start_dt'},
  {title:'End date',field:'end_dt'},

]

  
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

]
columns_caterer=[
  {title:'Caterer ID',field:'cid'},
  {title:'Contact',field:'ctr_contact'},
  {title:'Commission',field:'ctr_commission'},
  {title:'Style',field:'Style'},
  {title:'Cuisine',field:'cuisine'},
  {title:'#Plates',field:'num_plates'}
]

render(){
  console.log(this.state.details);

 return(<div>
  <MaterialTable
  title='Event List'
  columns={this.columns}
  data={this.state.details}
  
  detailPanel={rowData => {
    if(rowData.gid===null && rowData.bid===null){
     
    return (
      <div>
      <p>Bride name: {rowData.bride_name}</p>
      <p>Groom name: {rowData.groom_name}</p>
      <p>Religion: {rowData.religion}</p>
      </div>
    )}
    else if(rowData.gid===null && rowData.mid===null){
      return (
        <div>
        <p>Name: {rowData.bname}</p>
        <p>Age: {rowData.Age}</p>
        <p>Entertainment: {rowData.entertainment}</p>
        </div>
      )}
      else {
        return (
          <div>
          <p>Event Name: {rowData.event_name}</p>
          <p>Description: {rowData.description}</p>
          <p>Purpose: {rowData.purpose}</p>
          </div>
        )}
  }}/>

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
);
}
  
}
export default CustomerDetails ;


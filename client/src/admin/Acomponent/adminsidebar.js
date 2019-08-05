import React, { Component } from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom'
import UserService from '../../reactservice/UserService'
const API = new UserService();
class Adminsidebar extends Component{
   constructor(props){
       super(props);
       this.state ={
       } 
   }

logout = () => {
    API.logout();
    this.props.history.replace('/front/signup');
}


   render(){
    return(
        <div className="sidebar-section">
            <div class="dashboard-sidebar">
            <i class="fa fa-cogs visible-xs d_slide" aria-hidden="true" style={{ display: 'none' }}></i>
            <nav class="woocommerce-MyAccount-navigation left_panel">
                <ul>
                    <li class="is-active">
                        <a href="/admin/userlist"><i class="fa fa-user aj_fa" aria-hidden="true"></i>Users</a>
                    </li>
                    <li>
                        <a href="my-settings.html"><i class="fa fa-cogs aj_fa" aria-hidden="true"></i>My Settings</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" onClick={this.logout.bind(this)}><i class="fa fa-sign-out aj_fa" aria-hidden="true"></i>Logout</a>
                    </li>
                </ul>
            </nav>
        </div>
        </div>
    );
   }
}
export default withRouter (Adminsidebar); 
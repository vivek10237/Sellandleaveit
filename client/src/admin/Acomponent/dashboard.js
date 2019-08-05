import React, { Component } from 'react';
import Adminsidebar from './adminsidebar';
class Dashboard extends Component{
   constructor(props){
       super(props);
       this.state ={
       } 
   }
   render(){
    return(
        <div className="dashboard-section">
               
               

    <section id="main-dashboard">
       <Adminsidebar />

        <div class="dashboard-content">
            <div class="edit-form-main">
                <div class="edit-form-main-inner">
                    <div class="contact-form clearfix">
                        <h3>User Details</h3>
                        <form class="row" action="index.html" method="post">
                            <div class="col-md-4 col-sm-4">
                                <div class="form-group">
                                    <label>First Name *</label>
                                    <input type="text" class="form-control" name="name" placeholder="Name" required="" value="roler"/>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4">
                                <div class="form-group">
                                    <label>Last Name *</label>
                                    <input type="email" class="form-control" name="email" placeholder="Last " required="" value="john"/>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4">
                                <div class="form-group">
                                    <label>Email address *</label>
                                    <input type="text" class="form-control" name="email" placeholder="Subject" required="" value="roler.example@gmail.com"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="edit-form-main-inner">
                    <div class="contact-form clearfix">
                        <h3>Password change</h3>
                        <form class="row" action="index.html" method="post"> 
                            <div class="col-md-4 col-sm-4">
                                <div class="form-group">
                                    <label>Current password</label>
                                    <input type="password" class="form-control" name="name" placeholder="" required=""/>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4">
                                <div class="form-group">
                                    <label>New password</label>
                                    <input type="password" class="form-control" name="email" placeholder=" " required=""/>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-4">
                                <div class="form-group">
                                    <label>Confirm new password</label>
                                    <input type="password" class="form-control" name="email" placeholder="" required=""/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="clearfix"></div>
            
            

            {/* <div id="footer-small">
                <div class="copyright">
                    <p>Copyright © 2019 BIM. All rights reserved.</p>
                </div>
            </div> */}
        </div>
    </section>

        </div>
    );
   }
}
export default Dashboard; 
import React, { Component } from 'react';
import Adminsidebar from './adminsidebar';
import { MDBDataTable  } from 'mdbreact';
import { Button,Modal,Alert } from 'react-bootstrap';
import AdminService from '../Aservice/adminservice'
const AdminAPI = new AdminService();
let RowArray=[];

class Userlist extends Component{
   constructor(props){
       super(props);
       this.state ={
        users: {},
        show: false,
        userDetails: {},
        fields: {},
        id: '',
        name: '',
        email: '',
        showAlert:false
       } 
       this.getAllUser = this.getAllUser.bind(this);
       this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
       this.handleHide = this.handleHide.bind(this);
   }

componentDidMount(){
  this.getAllUser();
}

getAllUser() {
  AdminAPI.getUserAll()
        .then(res => {
          console.log('userServic..xx:', res.data.data);
          console.log('userServic:', res.data.data[0].name);
          RowArray = [];
          for(let i=1; i<res.data.data.length; i++){
            RowArray.push({name:res.data.data[i].name,email:res.data.data[i].email,action:[<Button onClick={this.EditUser.bind(this, res.data.data[i])} variant="success" size="sm"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Button>,<Button  variant="danger" size="sm"><i class="fa fa-trash-o" aria-hidden="true"></i></Button>]}) 
          }
          console.log('userServicArray:', RowArray);
          this.setState({ users: RowArray });
        }).catch(err => {
            console.log('xxxxxxx xxxx ', err);
        });
}


handleHide() {
  this.setState({ show: false });
}

EditUser(user) {
  console.log('xxxxxxx xxxx user data ', user);
  this.setState({
      show: true,
      userDetails: user

  });
}

handleUpdateSubmit() {
  const userInfoVo = {
      'id': this.refs.id.value,
      'name': this.refs.name.value,
      'email': this.refs.email.value
  }
AdminAPI.AdminEditUserInfo(userInfoVo)
.then((result) => {
    console.log('xxxhsdfgjasj: ', result);
   
    this.getAllUser();
    console.log('getUser:',this.getAllUser());
    if (result.data.success) {
        this.setState({
            showAlert: true,
            color: 'success',
            message: result.data.message

        });

        setTimeout(
            function () {
              this.setState({ show: false});
                this.setState({ showAlert: false });
            }
                .bind(this),
            2000
        );


    } else {
        this.setState({
            showAlert: true,
            color: 'warning',
            message: result.data.message
        });
    }
}).catch(err => {
    console.log('xxx', err);
});
console.log('xxxxxxxxx', userInfoVo);
}

handleChange(field, e) {
  let fields = this.state.fields;
  fields[field] = e.target.value;
  this.setState({ fields });
}

render(){
    const data = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Action',
          field: 'action',
          sort: 'asc',
          width: 100
        }
      ],
      rows: RowArray
    }

    return(
        <div className="dashboard-section">   
            <section id="main-dashboard">
            <Adminsidebar />
            <div class="dashboard-content">
              <div className="heading"><h4>User lists</h4></div>
          
              <div class="edit-form-main">
                 <MDBDataTable striped bordered hover data={data}  />
              </div>
              <Modal
                            show={this.state.show}
                            onHide={this.handleHide}
                            container={this}
                            aria-labelledby="contained-modal-title"
                        >
                           <form >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title">
                                    Update Profile
            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                  {this.state.showAlert ? (<Alert bsStyle={this.state.color}><strong>{this.state.message}</strong></Alert> ) : ( null )}

                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" onChange={this.handleChange.bind(this, "id")} type="hidden" ref="id" id="id" name="id" defaultValue={this.state.userDetails._id} />
                                        <input className="form-control" onChange={this.handleChange.bind(this, "name")} type="text" ref="name" id="name" name="name" defaultValue={this.state.userDetails.name} placeholder="Write your name here" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input className="form-control" onChange={this.handleChange.bind(this, "email")} ref="email" type="email" id="email" name="email" defaultValue={this.state.userDetails.email} placeholder="Enter your email address" required="" />
                                    </div>
                                    {/* <div className="form-group">
                                        <label>Message</label>
                                        <textarea ref="message" onChange={this.handleChange.bind(this, "message")} defaultValue={this.state.userDetails.message} className="form-control" id="message" name="message" placeholder="Enter free text, your purpose etc." rows="6"></textarea>
                                    </div> */}
                                    {/* <div className="form-group">
                                        <input className="submit_btn btn custom_theme_btn" onClick={this.handleUpdateSubmit} type="button" value="Send" />
                                    </div> */}
                                
                            </Modal.Body>
                            <Modal.Footer>
                                <Button type="button" variant="success" size="sm" onClick={this.handleUpdateSubmit} >Update</Button> &nbsp; <Button variant="danger" size="sm" onClick={this.handleHide}>Close</Button>
                            </Modal.Footer>
                            </form>
                        </Modal>

              </div>
            </section>
        </div>
    );
   }
}



export default Userlist; 
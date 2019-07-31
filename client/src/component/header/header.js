import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import logo from '../../assets/img/logo1.png';
import UserService from '../../reactservice/UserService'
const API = new UserService();
class Header extends Component{
   constructor(props){
       super(props);
       this.state ={
           open:false,
           openSubmenu1:false,
           openSubmenu2:false
       }
       this.toggleClass = this.toggleClass.bind(this);
       this.toggleClassSubmenu1 = this.toggleClassSubmenu1.bind(this);
       this.toggleClassSubmenu2 = this.toggleClassSubmenu2.bind(this);
   }

   toggleClass() {
    const currentState = this.state.open;
    this.setState({ 
        open: !currentState
     });
  };

  toggleClassSubmenu1(){
    const currentState = this.state.openSubmenu1;
    this.setState({ 
        openSubmenu1: !currentState
     });
  } 
    toggleClassSubmenu2(){
        const currentState = this.state.openSubmenu2;
        this.setState({ 
            openSubmenu2: !currentState
    });

  }
 
componentDidMount() {
    
    console.log('api: ', API.loggedIn());
    if (!API.loggedIn()){
        //this.props.history.replace('/');
        console.log('Not login user');
    }else{
       // API.getProfile();
       // this.getAllUser();
       console.log('login user');
    }

}

logout = () => {
    API.logout();
    this.props.history.replace('/signup');
}

    render(){
        return(
                   <div className="header-section">
                        <div id="fl_menu">
                            <ul>
                                <li><a href="account.html" style={{background: '#7030a0'}}>SIGN-UP</a></li>
                                <li><a href="traditional.html" style={{background: '#31859c'}}>LEARN</a></li>
                                <li><a href="video.html" style={{background: '#e46c0a'}} >VIDEOS</a></li>
                                <li><a href="contact.html" style={{background: '#d99694'}} >CONTACT</a></li>
                            </ul>
                        </div>

                        <div className="topheader">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="top-bar-links clearfix pull-right">
                                                <ul className="top-bar-acc">
                                                    <li className="top-bar-link"><i className="fa fa-phone"></i> <a href="#">1 (866) 900-5050</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>  

                                        
                    <header className="navigation" id="sticky-nav">
                        <div className="container-fluid">
                            <div className="top-logo">
                                <Link to={"/"}><img src={logo}/></Link>
                            </div>
                            <nav id='cssmenu' className="navigation">
                                <div id="head-mobile"></div>
                                <div onClick={this.toggleClass}  className={`button ${this.state.open ? 'menu-opened' : ''}`}></div>

                                <ul className={`nav ${this.state.open ? 'open' : ''}`} style={{ display: this.state.open ? 'block' : '' }}>
                                    <li className="active"><Link to={"/"} >Home</Link></li>

                                    <li className="has-sub">
                                        <span onClick={this.toggleClassSubmenu1} className={`submenu-button ${this.state.openSubmenu1 ? 'submenu-opened' : ''}`}></span>
                                            <a href="traditional.html">Learn</a>
                                        <ul className={`sub-menu ${this.state.openSubmenu1 ? 'open' : ''}`} style={{ display: this.state.openSubmenu1 ? 'block' : '' }}>
                                            <li><Link to="/traditional">TRADITIONAL</Link></li>
                                            <li><Link to="/set-it-and-leave-it">SET IT AND LEAVE IT</Link></li>
                                            <li><Link to="/video">VIDEOS</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li className="has-sub">
                                    <span onClick={this.toggleClassSubmenu2} className={`submenu-button ${this.state.openSubmenu2 ? 'submenu-opened' : ''}`}></span>
                                        <a href="tool.html">Tool</a>
                                        <ul className={`sub-menu ${this.state.openSubmenu2 ? 'open' : ''}`} style={{ display: this.state.openSubmenu2 ? 'block' : '' }}>
                                            <li><Link to="/tools">Tool</Link></li>
                                            <li><Link to="/faq">FAQ</Link></li>
                                        </ul>
                                    </li>
                                    
                                    <li><Link to="/service">Services</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contactus">Contact</Link></li>
                                    {/* <li><Link to="/ComponentToPrint">ComponentToPrint</Link></li> */}
                                  {API.loggedIn() ? ( <li><a  href="javascript:void(0)" onClick={this.logout.bind(this)} >Logout</a></li>) : '' }
                                    
                                </ul>
                            </nav>
                            
                            <ul className="my-account-link">
                                <li className="book_trip"><Link to="/signup"><i className="fa fa-user"></i> Account</Link></li>
                            </ul>
                        </div>
                    </header>

                   </div>
        );
  }
}

export default Header;

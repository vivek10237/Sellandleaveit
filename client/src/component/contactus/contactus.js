import React, { Component } from 'react';
import contact_banner from '../../assets/img/contact-banner-bg.jpg';

class Contactus extends Component{
    constructor(props){
        super(props);
        this.state ={
            isHide:false
        }
    }
render(){
         return(
                <div className="contact-section">
                     <section id="inner-page-banner">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="inner-page-banner-heading">
                                    <h2>Contact Us</h2>
                                </div>

                                <div class="inner-page-banner-image">
                                    <img src={contact_banner}/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="blouq-content">
                        <div class="container">
                            <div class="blouq-content-inner">
                                <h5>Have a question? Want to give some feedback? Whatever the reason, please use the form or contact information below to get in touch.</h5>
                            </div>
                        </div>
                    </section>

                    
                    <section class="contact-form-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="contact-form-box">
                                        <form action="" method="">
                                            <div class="form-group">
                                                <label> Tell us what you’re up to <span> (message) </span> </label>
                                                <textarea class="form-control" rows="4" cols="50" placeholder="Message"></textarea>
                                            </div>

                                            <div class="form-group">
                                                <label> Tick a box <span> (optional)</span> </label>
                                                <p> <input type="checkbox" value="" for="" name=""/> I want to hire you </p>
                                                <p> <input type="checkbox" value="" for="" name=""/> I have a question </p>
                                                <p> <input type="checkbox" value="" for="" name=""/> I have feedback </p>
                                                <p> <input type="checkbox" value="" for="" name=""/> Business synergy </p>
                                                <p> <input type="checkbox" value="" for="" name=""/> Other </p>
                                            </div>

                                            <div class="form-group">
                                                <label> Contact details <span> (required but kept private) </span> </label>
                                                <input type="text" for="name" value="" class="form-control" placeholder="Name"/>
                                                <input type="email" for="email" value="" class="form-control cstm-ct" placeholder="Email"/>
                                            </div>

                                            <div class="submit-btn">
                                                <button class="btn"> Go </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="contact-detail">
                                        <h3> CONTACT DETAILS </h3>
                                        <div class="c-detail">
                                            <p> Phone: <span> 1-866-900-5050 </span> </p>
                                            <p> Email: <span> info@SetItandLeaveIt.com </span> </p>
                                            <p> Internet: <span> www.SetItandLeaveIt.com </span> </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                </div>
         );
}
}
export default Contactus;
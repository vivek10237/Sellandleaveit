import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import './assets/css/style.css';
import './assets/css/my-custom.css';
import './assets/css/responsive.css';
//import './assets/css/owl.carousel.min.css';
//import './assets/css/owl.theme.default.min.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Home from './component/home/home';
import Traditional from './component/traditional/traditional';
import SetItAndLeaveIt from './component/set-it-and-leave-it/set-it-and-leave-it';
import Video from './component/video/video';
import Service from './component/service/service';
//import MockupTool from './component/tools/tools';
import MockupTool from './component/tools/tool';
import AboutUs from './component/aboutus/about';
import Contactus from './component/contactus/contactus';
import FAQ from './component/faq/faq';
//import ComponentToPrint from './component/pdftest';
import Signup from './component/signup/signup';
function App() {
  return (
    <div className="App">
      <Router>
          <Header /> 
           
          <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/traditional" component={Traditional} />
            <Route exact path="/set-it-and-leave-it" component={SetItAndLeaveIt} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/tools" component={MockupTool} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/contactus" component={Contactus} />
            <Route exact path="/faq" component={FAQ} />
            {/* <Route exact path="/ComponentToPrint" component={ComponentToPrint} /> */}
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
        <Footer />
      </Router> 


    </div>
  );
}

export default App;

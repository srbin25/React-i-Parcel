import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './home';
import Omeni from './omeni';
import Kontakt from './kontakt';
import NoMatch from './nomutch';
import Navig from './navbar';

export default class App extends Component{
    
    render(){
        
      return(

         <React.Fragment>
             <Router>
                 <Navig/>
                 <Switch>
                     <Route exact path="/home" component={Home}/>
                     <Route path="/omeni" component={Omeni}/>
                     <Route path="/kontakt" component={Kontakt}/>
                     < Route component={NoMatch}/>
                 </Switch>
             </Router>
         </React.Fragment>      
      );
    }
}

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './pages/about/about';
import Landing from './pages/landing/landing';


function Routes() {
    return (
       <BrowserRouter>
          <Switch>
             <Route path="/" exact component={Landing} />
             <Route path="/about" component={About} />
             {/* <Route path="/orphanages/create" component={CreateOrphanage} /> */}
             {/* <Route path="/orphanages/:id" component={Orphanage} /> */}
          </Switch>
       </BrowserRouter>
    );
 }
 
 export default Routes;
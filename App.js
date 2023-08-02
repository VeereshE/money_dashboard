import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import Dashboard from './Component/Dashboard/';
import Transactions from './Component/Transactions/';
import Profile from './Component/Profile/';
import Login from './Component/Login';
import NotFound from './Component/Login';
import DelectedIcon from './Component/DelectedIcon';
import EditTheTranscations from './Component/EditTheTransactions';
import AddTransactionForm from './Component/AddTransactionForm';
import Logout from './Component/Logout'




export default function App() {
  return (
       <Router>
          <Switch> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/transactions" component={Transactions} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path ="/delete" component= {DelectedIcon}/>
            <Route exact path ="/update" component= {EditTheTranscations}/>
            <Route exact path ="/adding" component= {AddTransactionForm}/>
            <Route exact path ="/logout" component= {Logout}/>
            <Route component={NotFound} />
         </Switch>
     </Router>  
      
  );
}


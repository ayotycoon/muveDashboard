import React from 'react';

import './App.css';
import SignIn from './components/pages/signIn/SignIn'
import SignUp from './components/pages/signUp/SignUp'
import ForgotPassword from './components/pages/forgotPassword/ForgotPassword'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';



import Layout from './components/pages/authenticated/common/layout/Layout';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="/sign-in" />);
        <Route exact path="/sign-in" component={SignIn} />;
        <Route exact path="/sign-up" component={SignUp} />;
        <Route exact path="/forgot-password" component={ForgotPassword} />;

{/** authenticated */}
        <Route  path="/auth" component={Layout} />;



 </Switch>
    </Router>

  )
}

export default App;

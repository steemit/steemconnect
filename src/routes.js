import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrapper from './wrapper';
import ModelWrapper from './ModelWrapper';
import Profile from './profile/Profile';
import Authorize from './auth/Authorize';
import Developer from './developers/Developers';
import About from './statics/About';
import TutorialsSimpleApp from './developers/Tutorials/TutorialsSimpleApp';
import Summary from './summary/Summary';
import Apps from './apps/Apps';
import App from './apps/App';
import Transfer from './transfer/Transfer';
import SignUp from './auth/Signup';

module.exports = (
  <Route path="/">
    <Route path="/signup" component={SignUp} />
    <Route component={Wrapper}>
      <IndexRoute component={Summary} />
      <Route path="/apps" component={Apps} />
      <Route path="/apps/@:app" component={App} />
      <Route path="/profile" component={Profile} />
      <Route path="/developers" component={Developer} />
      <Route path="/developers/tutorials/simple-app" component={TutorialsSimpleApp} />
      <Route path="/about" component={About} />
    </Route>

    <Route component={ModelWrapper}>
      <Route path="/transfer(/@:to)(/:amount)(/:currency)(/:memo)" component={Transfer} />
      <Route path="/authorize/@:app" component={Authorize} />
    </Route>
  </Route>
);

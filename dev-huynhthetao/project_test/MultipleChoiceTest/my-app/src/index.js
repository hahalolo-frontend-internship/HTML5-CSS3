import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './component/Layout/Home';
import Register from './component/Account/Register';
import Login from './component/Account/Login';
import Test from './component/Test/Test';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        {/* <Route path='/login' render={(props) => <Login {...props} />} /> */}
        <Route path='/test' component={Test} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

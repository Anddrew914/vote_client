import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Voting from './components/Voting';

const routes = <Route componenet={App}>
  <Route path="/" component={Voting} />
</Route>;

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('app')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Abort from './components/Abort';
import NotFound from './components/NotFound';
import Help from './components/Help';
import Topic from './components/Topic';
import Welcome from './components/Welcome';
import Welcomeb from './components/Welcomeb';
import Welcomey from './components/Welcomey';
import Welcomef from './components/Welcomef';



ReactDOM.render(<Router history={ hashHistory }>
  	<Route path="/" component={App}>
  		<IndexRoute component={Welcome} />
  		<Route path="/beach" component={Welcomeb} />
  		<Route path="/yoga" component={Welcomey} />
  		<Route path="/fire" component={Welcomef} />
  		<Route path="topic" component={Topic} />
  		<Route path="help" component={Help} />
  		<Route path="abort" component={Abort} />
  	</Route>
  	<Route path="*" component={NotFound} />
  </Router>, document.getElementById('root'));
registerServiceWorker();

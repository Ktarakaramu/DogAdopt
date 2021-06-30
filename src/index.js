import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Route,BrowserRouter as Router} from 'react-router-dom';

const oRoute = (
	<Router>
		<div>
			<Route exact path="/" component={App}></Route>
		</div>
	</Router>
)

ReactDOM.render(oRoute,document.getElementById('root'));

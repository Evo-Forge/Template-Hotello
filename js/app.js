import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import HotelloHeader from './components/header';
import HotelloHome from './components/home';
import HotelloSResult from './components/s-result';
import HotelloSearch from './components/search';
import HotelloInfo from './components/info';
import HotelloVoucher from './components/voucher';
import HotelloSuccess from './components/success';
import HotelloBrowser from './components/browser';
import HotelloLogin from './components/login';
import HotelloRegister from './components/register';
import HotelloReservation from './components/reservation';
import HotelloPayment from './components/payment';
import HotelloDescription from './components/description';
import HotelloContainer from './components/container';
import HotelloResults from './components/results';




ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={HotelloHome} />
		<Route path="content" component={HotelloContainer}>
			<Route path='browser' component={HotelloBrowser} />
			<Route path="search" component={HotelloSearch}/>
			<Route path="s-result" component={HotelloSResult}/>
			<Route path="info" component={HotelloInfo}/>
			<Route path="voucher" component={HotelloVoucher}/>
			<Route path="success" component={HotelloSuccess}/>
			<Route path="login" component={HotelloLogin}/>
			<Route path="register" component={HotelloRegister}/>
			<Route path="reservation" component={HotelloReservation}/>
			<Route path="payment" component={HotelloPayment}/>
			<Route path="description" component={HotelloDescription}/>
			<Route path="results" component={HotelloResults}/>
		</Route>
	</Router>
	,
	document.querySelector('.app')
);

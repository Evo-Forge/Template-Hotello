import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import HotelloHeader from './components/header';
import HotelloBrowser from './components/browser';
import HotelloLogin from './components/login';
import HotelloRegister from './components/register';
import HotelloReservation from './components/reservation';
import HotelloPayment from './components/payment';
import HotelloDescription from './components/description';


class Hotello extends React.Component {
	render() {
        return(
        	<Block>
        		<HotelloHeader />
        		<HotelloLogin />
        		<HotelloRegister />
						<HotelloReservation />
						<HotelloPayment />
						<HotelloDescription />
        	</Block>
        );
    }
}

ReactDOM.render(
	<Block>
		<Hotello />
	</Block>
	,
	document.querySelector('.app')
);

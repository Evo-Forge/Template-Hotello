import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import HotelloHeader from './components/header';
import HotelloBrowser from './components/browser';
import HotelloLogin from './components/login';
import HotelloRegister from './components/register';
import HotelloReservation from './components/reservation';


class Hotello extends React.Component {
	render() {
        return(
        	<Block>
        		<HotelloHeader />
        		<HotelloLogin />
        		<HotelloRegister />
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

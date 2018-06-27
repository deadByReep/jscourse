import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Greet() {

	let phrase = "World"

	return (
		<h1> Hello {4+4} </h1>	
		)
}

ReactDOM.render(<Greet />, document.getElementById('root'));
registerServiceWorker();

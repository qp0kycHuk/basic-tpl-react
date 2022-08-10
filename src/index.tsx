import React from 'react'
import ReactDOM from 'react-dom';
import { App } from './App'
import './App.scss';

import ripple from 'npm-kit-ripple';


window.addEventListener('DOMContentLoaded', () => loadHandler())


function loadHandler() {
	ripple.init();
	ripple.attach('.btn')
	ripple.attach('.waved')
	ripple.deAttach('.btn--link')
	
	ReactDOM.render(<App />, document.querySelector('#root'))
}
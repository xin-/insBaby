import React, { PropTypes } from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import todoApp from './reducers'
import Header from './component/header/index.js'
import '../css/index.scss'

let store = createStore(todoApp)
let rootElement = document.getElementById('app')

const myRouter = ({ store }) => 
		<Router history={browserHistory}>
	      	<Route path="/" component={Header}/>
	    </Router>

const Root = ({ store }) => (
	<Provider store={store}>
	    <myRouter/>
	</Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
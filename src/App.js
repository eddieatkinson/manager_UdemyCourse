import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import config from '../config/config';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp(config.firebase);
	}

	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Router />
			</Provider>
		);
	}
}

export default App;

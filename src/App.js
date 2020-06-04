import React from 'react';
import Header from './components/Header/Header';
import AuthHeader from './components/AuthHeader/AuthHeader';
import routes from './routes';
import { connect } from 'react-redux';
import './App.css';

function App(props) {
	return (
		<div className='App'>
			{props.isLoggedIn ? <Header /> : <AuthHeader />}
			{routes}
		</div>
	);
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(App);

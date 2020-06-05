import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducer';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	changeHandler = (ev) => {
		this.setState({
			[ev.target.name]: ev.target.value,
		});
	};

	register = (ev) => {
		ev.preventDefault();
		const { email, password } = this.state;
		axios
			.post('/auth/register', { email, password })
			.then((res) => {
				this.props.loginUser(res.data);
				this.props.history.push('/dashboard');
			})
			.catch((err) => {
				alert('Could not register');
			});
	};

	render() {
		const { email, password } = this.state;
		return (
			<div>
				<form onSubmit={(ev) => this.register(ev)}>
					<input
						type='text'
						placeholder='email'
						name='email'
						value={email}
						onChange={(ev) => this.changeHandler(ev)}
					/>
					<input
						type='password'
						placeholder='password'
						name='password'
						value={password}
						onChange={(ev) => this.changeHandler(ev)}
					/>
					<input type='submit' value='Register' />
				</form>
				<span> Already have an account? Login here:</span>
				<Link to='/'>Login</Link>
			</div>
		);
	}
}

const MapStateToProps = (state) => state;

export default connect(MapStateToProps, { loginUser })(Register);

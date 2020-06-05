import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducer';

class Landing extends Component {
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

	login = (ev) => {
		ev.preventDefault();
		const { email, password } = this.state;
		axios
			.post('/auth/login', { email, password })
			.then((res) => {
				this.props.loginUser(res.data);
				this.props.history.push('/dashboard');
			})
			.catch((err) => {
				alert('Could not login');
			});
	};

	render() {
		const { email, password } = this.state;
		return (
			<div>
				<form onSubmit={(ev) => this.login(ev)}>
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
					<input type='submit' value='Login' />
				</form>
				<span> Don't already have an account? Register here:</span>
				<Link to='/register'>Register</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => state,
	mapDispatchToProps = { loginUser };

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

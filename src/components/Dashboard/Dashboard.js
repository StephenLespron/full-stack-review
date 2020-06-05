import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';

class Dashboard extends Component {
	componentDidMount() {
		this.props.getUser();
	}
	render() {
		return <div>Dashboard</div>;
	}
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getUser })(Dashboard);

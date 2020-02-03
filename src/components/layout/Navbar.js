import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'

const Navbar = (props) => {
	const { auth } = props
	const links = auth.uid? <SignInLinks />: <SignOutLinks />;
	return (
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to='/' className='brand-logo'>Project Plan</Link>
				{links}
			</div>
		</nav>
		)
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}
export default connect(mapStateToProps)(Navbar)
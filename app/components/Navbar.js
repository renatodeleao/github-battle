import React from 'react';
import { Link, NavLink } from 'react-router-dom';

//nav link for active

const Navbar = (props) => {
	return (
		<nav className="c-nav">	
			<NavLink 
				exact
				className="c-nav__item" 
				activeClassName="is-active"
				to="/">Home
			</NavLink>
			<NavLink 
				className="c-nav__item" 
				activeClassName="is-active"
				to="/battle">Battle
			</NavLink>
			<NavLink 
				className="c-nav__item" 
				activeClassName="is-active"
				to="/popular">Popular
			</NavLink>
		</nav>
	)
}

export default Navbar;
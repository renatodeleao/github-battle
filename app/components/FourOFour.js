import React from 'react';
import {Link} from 'react-router-dom';

class FourOFour extends React.Component {
	render(){
		return(
			<div className="o-page">
				<header>
					<h1>Not found! </h1>
					<Link 
						className="c-button c-button--cta c-button--primary" 
						to="/">
						Go Home!
					</Link>
				</header>
			</div>
		)
	}
}

export default FourOFour;
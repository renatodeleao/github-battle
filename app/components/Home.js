import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
	render(){
		return(
			<div className="o-page">
				<header>
					<h1> Github Battle </h1>
					<Link 
						className="c-button c-button--cta c-button--primary" 
						to="/battle">
						Fight!
					</Link>
				</header>
			</div>
		)
	}
}

export default Home;
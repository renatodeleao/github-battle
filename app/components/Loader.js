import React from 'react';

const Loader = (props) => {
	return(
		<div className="c-loader">
			{ props.text &&
				<div className="c-loader__text">{props.text}</div>
			}
		</div>
	)
}

export default Loader;
var React = require('react');
var PropTypes = require('prop-types');

class Badge extends React.Component {
	render(){
		const {img, name, username} = this.props;

		return(
			<div className="c-badge">
				<img
					className="c-badge__img"
					src={img}
					alt="Avatar"
					style={{width: 100, height:100}}
				/>
				<h1 className="c-badge__name">{name}</h1>
				<h3 className="c-badge__username">{username}</h3>
			</div>
		)
	}
}

Badge.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
}

export default Badge;
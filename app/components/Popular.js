import React from 'react';
import PropTypes from 'prop-types';


/*
	this could be a prive component of Tabs
	if it had it's own file
*/
const TabItem = ({lang, selectedLanguage, onSelect }) => {
	return (
		<li
			className={`c-nav__item ${lang === selectedLanguage ? 'is-active' : ""}`}
			onClick={onSelect.bind(null, lang)} >
			{lang}
		</li>
	)
}


// Stateless functional component
const Tabs = (props) => {
	const languages = ["All", "JavaScript", "ruby", "Java", "CSS"];
	return(
		<ul className="c-nav c-nav--tabs">
			{languages.map(lang => 
				<TabItem 
					key={lang}
					lang={lang} 
					selectedLanguage={props.selectedLanguage}
					onSelect={props.onSelect} />
			)}
		</ul>
	)
}

Tabs.propTypes = {
	onSelect: PropTypes.func.isRequired,
	selectedLanguage: PropTypes.string.isRequired
}


// Component
class Popular extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		}

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(lang) {
		this.setState(function(){
			return { selectedLanguage: lang }
		});
	}

	render(){
		return(
			<div className="o-page">
				<Tabs
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
			</div>

		)
	}
}

export default Popular;
import React from 'react';

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
		var languages = ["All", "JavaScript", "ruby", "Java", "CSS"];

		return(
			<ul className="c-nav">
				{languages.map(lang => {
					return (
						<li
							onClick={this.updateLanguage.bind(null, lang)}
							className={`c-nav__item ${lang === this.state.selectedLanguage ? 'is-active' : ""}`}
							key={lang}>
							{lang}
						</li>
					)
				})}

			{/*
				old school pass this as second argument of map
				{languages.map(function(lang){
					return (
						<li 
							onClick={this.updateLanguage}
							className="c-nav__item"
							key={lang}>
							{lang}
						</li>
					)
				}, this **** MAGIC***)}
			*/}
			</ul>
		)
	}
}


export default Popular;
import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import * as scrollAnim from '../utils/scrollAnim';
import Loader from './Loader';


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
	const languages = ["All", "JavaScript", "Ruby", "Java", "CSS"];
	return(
		<ul className="c-nav c-nav--secondary c-nav--tabs">
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


const GitHubRepoCard = (props) => {
	const {
		rank, 
		ownerLogin, 
		ownerAvatarUrl, 
		repoName,
		repoUrl,
		stargazersCount
	} = props;

	return (
		<article className="c-card c-card--github-repo">
			<div className="c-card__rank">#{rank}</div>
			<div className="c-card__header">
				<img
					className="c-avatar"
					alt={`Avatar for ${ownerLogin}`}
					src={ownerAvatarUrl}
				/>
				<h1><a href={repoUrl} target="_blank">{repoName}</a></h1>
				<p className="c-card__owner">@{ownerLogin}</p>
				<span className="c-card__stargazers">{stargazersCount} stars</span>
			</div>
		</article>
	)
}

GitHubRepoCard.propTypes = {
	rank: PropTypes.number.isRequired,
	ownerLogin: PropTypes.string.isRequired,
	ownerAvatarUrl:PropTypes.string.isRequired,
	repoUrl:PropTypes.string.isRequired,
	repoName:PropTypes.string.isRequired,
	stargazersCount: PropTypes.number
}


class RepoGrid extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render(){
		return (
			<ul className="o-grid o-grid--github-cards">
				{this.props.repos.map((repo, index) => {
					return (
						<li key={repo.name} className="o-grid__el">
							<GitHubRepoCard
								rank={index + 1}
								ownerLogin={repo.owner.login}
								ownerAvatarUrl={repo.owner.avatar_url}
								repoName={repo.name}
								repoUrl={repo.html_url}
								stargazersCount={repo.stargazers_count}
								/>
						</li>
					)
				})}
			</ul>
		)
	}

	componentDidMount() {
		scrollAnim.fadeDaShitOutOfAnElement('.o-grid', '.o-grid__el', 0);
	}
}

RepoGrid.propTypes = {
	repos: PropTypes.array.isRequired
}

// Component
class Popular extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		}

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	
	updateLanguage(lang) {
		this.setState(function(){
			return { 
				selectedLanguage: lang,
				repos: null,
			}
		});

		// on click fetch new repos
		api.fetchPopularRepos(lang)
			.then(function(repos) {
				this.setState(function(){
					return {
						repos: repos
					}
				})
			}.bind(this));
	}

	render(){
		return(
			<div className="o-page">
				<Tabs
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
				{!this.state.repos
					? <Loader text="Loading Repos..." />
					: <RepoGrid repos={this.state.repos} />
				}
			</div>

		)
	}

	// when rendered initialy without any click fetch the current state repos (all)
	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

}

export default Popular;
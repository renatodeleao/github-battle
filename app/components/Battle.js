import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Badge from './Badge';


/*

	"Private" COmponents
-----------------------*/
const PlayerPreview = (props) => {
	const {
		id,
		img,
		name,
		username,
		onReset
	} = props;

	return (
		<div>
			<Badge
				img={img}
				name={name}
				username={username} />
			<button
				style={{display: 'block', margin: "0 auto"}}
				className="c-button"
				onClick={onReset.bind(null, id)}>
				Reset
			</button>
		</div>
	)
}
class PlayerInput extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			username: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();

		this.props.onSubmit(
			this.props.id, 
			this.state.username
		);
	}

	handleChange(e){
		var value = e.target.value;
		this.setState(function(){
			return {
				username: value
			}
		})
	}

	render(){
		const {
			id,
			label, 
			onSubmit
		} = this.props;

		return(
			<form 
				className="o-form"
				onSubmit={this.handleSubmit}>
				<div className="o-from__block">
					<label htmlFor='username' className="c-input-group">
					<h2>{label}</h2>
					<input 
						id='username'
						type="text" 
						className="c-input c-input--primary"
						placeholder="username"
						autoComplete="off"
						value={this.state.username}
						onChange={this.handleChange}
					/>
					</label>
					<button
						type="submit"
						className="c-button c-button--primary c-button--cta">
						Submit
					</button>
				</div>
			</form>
		);
	}
}

PlayerInput.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	onSubmit: PropTypes.func
}



/*

	MAIN CLASS
-----------------------*/
export default class Battle extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			
			playerOneName: "",
			playerTwoName: "",
			playerOneImg: null,
			playerTwoImg: null,
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}


	handleSubmit(id, username) {
		this.setState(function(){
			var newState = {};

			// id playerOne or playerTwo
			newState[id + 'Name'] = username;
			newState[id + 'Img'] = `https://github.com/${username}.png?size=200`;
			return newState;
		})
	}

	handleReset(id){
		console.log(id);
		this.setState(function(){
			var newState = {};

			newState[id + 'Name'] = '';
			newState[id + 'Img'] = null;

			return newState;
		})
	}


	render(){
		var playerOneName = this.state.playerOneName;
		var playerTwoName = this.state.playerTwoName;

		return(
			<div className="o-page">
				<h1> Battle Page </h1>
				<section className="o-section">
					<div className="o-grid">
						<div className="o-grid__el u-w-50@sm">
							{!playerOneName 
								? <PlayerInput 
									id="playerOne"
									label="Player One"
									onSubmit={this.handleSubmit} />
								: <PlayerPreview
									id="playerOne"
									img={this.state.playerOneImg}
									name={this.state.playerOneName}
									username={this.state.playerOneName} 
									onReset={this.handleReset}
									/>
							}
						</div>

						<div className="o-grid__el u-w-50@sm">
						{!playerTwoName 
							? <PlayerInput 
								id="playerTwo"
								label="Player Two"
								onSubmit={this.handleSubmit} />
							: <PlayerPreview
									id="playerTwo"
									img={this.state.playerTwoImg}
									name={this.state.playerTwoName}
									username={this.state.playerTwoName} 
									onReset={this.handleReset}
									/>
						}
						</div>
					</div>
					{ (playerOneName && playerTwoName) &&
					<div className="o-section u-txt-c">
						<Link to={{
							pathname: `${this.props.match.url}/results`,
							search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
						}} 
							className="c-button c-button--cta c-button--primary">
							BATTLE
						</Link>
					</div>
					}
				</section>
			</div>
		)
	}
}
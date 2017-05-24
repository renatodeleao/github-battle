import React from 'react';
import Link from 'react-router-dom';
import PropTypes from 'prop-types';
import Badge from './Badge';


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
	render(){
		var playerOneName = this.state.playerOneName;
		var playerTwoName = this.state.playerTwoName;

		return(
			<div className="o-page">
				<header>
					<h1> Battle Page </h1>
					<div className="o-grid">
						<div className="o-grid__el u-w-50@sm">
							{!playerOneName 
								? <PlayerInput 
									id="playerOne"
									label="Player One"
									onSubmit={this.handleSubmit} />
								: <Badge
									img={this.state.playerOneImg}
									name={this.state.playerOneName}
									username={this.state.playerOneName} />
							}
						</div>

						<div className="o-grid__el u-w-50@sm">
						{!playerTwoName 
							? <PlayerInput 
								id="playerTwo"
								label="Player Two"
								onSubmit={this.handleSubmit} />
							: <Badge
								img={this.state.playerTwoImg}
								name={this.state.playerTwoName}
								username={this.state.playerTwoName} />
						}
						</div>
					</div>
					{ (playerOneName && playerTwoName) &&
						<p>asdad</p>
					}
				</header>
			</div>
		)
	}
}
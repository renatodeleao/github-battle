var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle
// UI
class App extends React.Component {

	render(){
		return(
			<div>
				Hello Renato Vietnamita! 
			</div>
		)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById('app')
);
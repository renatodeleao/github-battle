import React from 'react';
import Home from './Home';
import Battle from './Battle';
import BattleResults from './BattleResults';
import Popular from './Popular';
import FourOFour from './FourOFour';
import Navbar from './Navbar';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
	render() {
		return(
			<Router >
				<div className="o-app">
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
						<Route path='/battle/results' component={BattleResults} />
						<Route path='/popular' component={Popular} />

						<Route component={FourOFour}/>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;

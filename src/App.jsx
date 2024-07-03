import { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./homeComponents/home";

class App extends Component {

	constructor() {
		super();
	}
	componentDidMount() {
		// console.log(window.innerHeight,"  ",window.innerWidth);
	}

	render() {
		return (
			<Router basename='/'>
				<Switch>
					<Route path='/' component={Home} />

				</Switch>
			</Router>
		)
	}
}


export default App



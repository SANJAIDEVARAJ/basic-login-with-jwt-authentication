import React from 'react'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'


const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/dashboard" component={Dashboard} />
					<Redirect from="/" to="/login" />
				</Switch>
			</Router>
		</div>
	)
}

export default App
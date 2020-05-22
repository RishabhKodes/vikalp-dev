import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import ParentLogin from './components/ParentLogin'
import StudentLogin from './components/StudentLogin'

export default function App() {
	return (
		<div>
			<Switch>
				<Route path='/parent-login' component={ParentLogin} />
				<Route path='/student-login' component={StudentLogin} />
			</Switch>
		</div>
	)
}

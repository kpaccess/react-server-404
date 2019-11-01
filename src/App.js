import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import './App.css';

function Status({ code, children }) {
	return (
		<Route
			render={({ staticContext }) => {
				if (staticContext) staticContext.status = code;
				return children;
			}}
		/>
	);
}

function NotFound() {
	return (
		<Status code={404}>
			<div>
				<h1>Sorry, can’t find that.</h1>
			</div>
		</Status>
	);
}
const App = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route component={NotFound} />
	</Switch>
);

export default App;

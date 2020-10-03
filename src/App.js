import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Home from './Home';
import Detail from './Detail';
import { Route, Switch } from 'react-router-dom';

function App() {
	const [countries, setCountries] = useState();

	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then((res) => setCountries(res.data));
	}, []);

	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path="/" exact render={() => <Home countries={countries} />} />
				<Route
					path="/:country"
					render={(props) => <Detail countries={countries} selectedCountry={props.match.params.country} />}
				/>
			</Switch>
		</React.Fragment>
	);
}

export default App;

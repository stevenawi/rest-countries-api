import React from 'react';
import { connect } from 'react-redux';
import './Card.css';

function Card({ flag, name, population, region, capital, darkMode }) {
	return (
		<div className="card">
			<div className="card__flag">
				<img src={flag} alt="flag" />
			</div>
			<div className={`card__info ${darkMode ? 'dark-element' : 'light-element'}`}>
				<h3>{name}</h3>
				<p>
					<span>Population:</span> {population.toLocaleString()}
				</p>
				<p>
					<span>Region:</span> {region}
				</p>
				<p>
					<span>Capital:</span> {capital}
				</p>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	darkMode: state,
});

export default connect(mapStateToProps)(Card);

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import backLight from './icons/back-light.svg';
import backDark from './icons/back-dark.svg';
import './Detail.css';

function Detail({ countries, selectedCountry, darkMode }) {
	const [countryData, setCountryData] = useState();
	const [borderCountries, setBorderCountries] = useState();
	const history = useHistory();

	const handleBack = () => {
		history.push('/');
	};

	useEffect(() => {
		if (countries && selectedCountry) {
			setCountryData(countries.find((country) => country.name === selectedCountry));
		}
	}, [countries, selectedCountry]);

	useEffect(() => {
		if (countryData) {
			const borders = countryData.borders;
			setBorderCountries(
				borders.map((border) => {
					const country = countries.find((country) => country.alpha3Code === border);
					return country.name;
				})
			);
		}
	}, [countries, countryData]);

	return (
		<div className={`detail ${darkMode ? 'dark-background' : 'light-background'}`}>
			<button className={`detail__back ${darkMode ? 'dark-element' : 'light-element'}`} onClick={handleBack}>
				<img src={`${darkMode ? backDark : backLight}`} alt="arrow back" /> Back
			</button>
			{countryData && (
				<div className="detail__content">
					<div className="detail__left">
						<img className="detail__flag" src={countryData.flag} alt="flag" />
					</div>
					<div className="detail__right">
						<h3>{countryData.name}</h3>
						<div className="detail__infoContainer">
							<div className="detail__info detail__info-left">
								<p>
									<span>Native Name:</span> {countryData.nativeName}
								</p>
								<p>
									<span>Population:</span> {countryData.population.toLocaleString()}
								</p>
								<p>
									<span>Region:</span> {countryData.region}
								</p>
								<p>
									<span>Sub Region:</span> {countryData.subregion}
								</p>
								<p>
									<span>Capital:</span> {countryData.capital}
								</p>
							</div>
							<div className="detail__info detail__info-right">
								<p>
									<span>Top Level Domain:</span> {countryData.topLevelDomain.join(', ')}
								</p>
								<p>
									<span>Currencies:</span>{' '}
									{countryData.currencies.map((data) => data.name).join(', ')}
								</p>
								<p>
									<span>Languages:</span> {countryData.languages.map((data) => data.name).join(', ')}
								</p>
							</div>
						</div>

						<div className="detail__borderCountries">
							<p>Border Countries:</p>
							{borderCountries &&
								borderCountries.map((country) => (
									<Link
										key={country}
										className={`detail__link ${darkMode ? 'dark-element' : 'light-element'}`}
										to={`/${country}`}
									>
										{country}
									</Link>
								))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	darkMode: state,
});

export default connect(mapStateToProps)(Detail);

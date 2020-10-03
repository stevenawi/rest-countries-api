import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './Card';
import searchLight from './icons/search-light.svg';
import searchDark from './icons/search-dark.svg';
import downLight from './icons/down-light.svg';
import downDark from './icons/down-dark.svg';
import './Home.css';

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function Home({ countries, darkMode }) {
	const [filter, setFilter] = useState('Filter by Region');
	const [showFilter, setShowFilter] = useState(false);
	const [search, setSearch] = useState();

	const handleRegionChange = (region) => {
		region === 'All' ? setFilter('Filter by Region') : setFilter(region);
		setShowFilter(false);
	};

	return (
		<div className={`home ${darkMode ? 'dark-background' : 'light-background'}`}>
			<div className="home__top">
				<div className={`home__search ${darkMode ? 'dark-element' : 'light-element'}`}>
					<img src={`${darkMode ? searchDark : searchLight}`} alt="search icon" />
					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search for a country..."
					/>
				</div>
				<div className="home__filterContainer">
					<div
						className={`home__filter ${darkMode ? 'dark-element' : 'light-element'}`}
						onClick={() => setShowFilter(!showFilter)}
					>
						{filter}
						<img src={`${darkMode ? downDark : downLight}`} alt="down icon" />
					</div>
					{showFilter && (
						<div className={`home__dropdown ${darkMode ? 'dark-element' : 'light-element'}`}>
							{regions.map((region) => (
								<span key={region} onClick={() => handleRegionChange(region)}>
									{region}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
			<div className="home__bottom">
				{countries &&
					countries
						.filter((country) => {
							if (filter === 'Filter by Region') return true;
							return country.region === filter;
						})
						.filter((country) => {
							if (!search) return true;
							return country.name.toLowerCase().includes(search);
						})
						.map(({ numericCode, flag, name, population, region, capital }) => (
							<Link className="home__link" key={numericCode} to={`/${name}`}>
								<Card
									flag={flag}
									name={name}
									population={population}
									region={region}
									capital={capital}
								/>
							</Link>
						))}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	darkMode: state,
});

export default connect(mapStateToProps)(Home);

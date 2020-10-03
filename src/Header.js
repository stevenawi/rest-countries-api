import React from 'react';
import { connect } from 'react-redux';
import { setThemeAction } from './redux/action/getThemeAction';
import moonLight from './icons/moon-light.svg';
import moonDark from './icons/moon-dark.svg';
import './Header.css';

function Header({ darkMode, setTheme }) {
	const handleMode = () => {
		setTheme(!darkMode);
	};

	return (
		<header className={`header ${darkMode ? 'dark-element' : 'light-element'}`}>
			<h1 className="header__title">Where in the world?</h1>
			<button className="header__mode" onClick={handleMode}>
				<img src={darkMode ? moonDark : moonLight} alt="mode icon" />
				<span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
			</button>
		</header>
	);
}

const mapStateToProps = (state) => ({
	darkMode: state,
});

const mapDispatchToProps = (dispatch) => ({
	setTheme: (theme) => dispatch(setThemeAction(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

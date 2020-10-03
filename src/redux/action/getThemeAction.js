import { SET_THEME } from '../actionTypes';

export const setThemeAction = (theme) => ({
	type: SET_THEME,
	payload: theme,
});

import { SET_THEME } from '../actionTypes';

const initialState = false;

export const setThemeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_THEME:
			return action.payload;
		default:
			return state;
	}
};

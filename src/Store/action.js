export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_THEME = 'SET_THEME';

// Action Creators
export const increment = (value) => ({
    type: INCREMENT,
    payload: value,
});

export const decrement = (value) => ({
    type: DECREMENT,
    payload: value,
});

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
});
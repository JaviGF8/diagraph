import DispatchTypes from './types';

export const initialState = {
  dates: [],
  tabs: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DispatchTypes.SET_DATES:
      return { ...state, dates: payload };
    case DispatchTypes.SET_TABS:
      return { ...state, tabs: payload };
    default:
      return state;
  }
};

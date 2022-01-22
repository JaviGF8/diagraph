import DispatchTypes from './types';

export const initialState = {
  dates: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case DispatchTypes.SET_DATES:
      return { ...state, dates: payload };
    default:
      return state;
  }
};

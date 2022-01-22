import PropTypes from 'prop-types';
import React, { useReducer, useMemo } from 'react';

import { AppContext } from 'hooks/useAppContext';
import { reducer, initialState } from 'reducers/appContext';
import DispatchTypes from 'reducers/appContext/types';

const AppProvider = ({ children }) => {
  const [auth, dispatchApp] = useReducer(reducer, initialState);

  const setDates = (dates) => {
    dispatchApp({ type: DispatchTypes.SET_DATES, payload: dates });
  };

  const memoizedValue = useMemo(() => ({ ...auth, setDates }), [auth, children]);

  return <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AppProvider;

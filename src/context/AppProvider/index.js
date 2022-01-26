import PropTypes from 'prop-types';
import React, { useReducer, useMemo, useEffect } from 'react';

import config from 'config';

import { AppContext } from 'hooks/useAppContext';
import { reducer, initialState } from 'reducers/appContext';
import DispatchTypes from 'reducers/appContext/types';

const AppProvider = ({ children }) => {
  const [auth, dispatchApp] = useReducer(reducer, initialState);

  const setDates = (dates) => {
    config.localStorage.setDates(dates);
    dispatchApp({ type: DispatchTypes.SET_DATES, payload: dates });
  };

  const setTabs = (tabs) => {
    config.localStorage.setTabs(tabs);
    dispatchApp({ type: DispatchTypes.SET_TABS, payload: tabs });
  };

  useEffect(() => {
    setDates(config.localStorage.getDates());
    setTabs(config.localStorage.getTabs());
  }, []);

  const memoizedValue = useMemo(() => ({ ...auth, setDates, setTabs }), [auth, children]);

  return <AppContext.Provider value={memoizedValue}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AppProvider;

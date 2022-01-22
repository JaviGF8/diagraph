import { useTheme } from '@emotion/react';
import React, { useState } from 'react';

import logo from 'assets/images/logos/logo-white.png';

import Datepicker from 'components/base/Datepicker/index.jsx';

import useAppContext from 'hooks/useAppContext/index.js';
import utils from 'utils';

import styles from './styles.js';

const Navbar = () => {
  const [maxDate, setMaxDate] = useState();
  const theme = useTheme();
  const { dates, setDates } = useAppContext();

  const onChange = (val) => {
    setDates(val);
    setMaxDate(val?.[0] && !val[1] ? utils.dateManager.addMonthsToDate(val[0], 3) : undefined);
  };

  return (
    <header css={styles.navbar(theme)}>
      <div>
        <h1>
          <img src={logo} alt="diagraph-logo" />
        </h1>
        <Datepicker
          endDate={dates?.[1]}
          maxDate={maxDate}
          onChange={onChange}
          placeholderText="Select range"
          selected={dates?.[0]}
          selectsRange
          startDate={dates?.[0]}
        />
      </div>
    </header>
  );
};

export default Navbar;

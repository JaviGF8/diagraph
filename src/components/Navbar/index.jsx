import { useTheme } from '@emotion/react';
import React, { useState } from 'react';

import logo from 'assets/images/logos/logo-color.png';

import Datepicker from 'components/base/Datepicker';

import useAppContext from 'hooks/useAppContext';
import utils from 'utils';

import styles from './styles';

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
          placeholder="Date range"
          selected={dates?.[0]}
          selectsRange
          startDate={dates?.[0]}
        />
      </div>
    </header>
  );
};

export default Navbar;

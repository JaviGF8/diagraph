import { useTheme } from '@emotion/react';
import React, { useState } from 'react';

import logo from 'assets/images/logos/logo-white.png';

import Datepicker from 'components/base/Datepicker/index.jsx';

import styles from './styles.js';

const Navbar = () => {
  const theme = useTheme();
  const [dates, setDates] = useState();

  return (
    <header css={styles.navbar(theme)}>
      <div>
        <h1>
          <img src={logo} alt="diagraph-logo" />
        </h1>
        <Datepicker
          endDate={dates?.[1]}
          onChange={setDates}
          selected={dates?.[0]}
          selectsRange
          startDate={dates?.[0]}
        />
      </div>
    </header>
  );
};

export default Navbar;

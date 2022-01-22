import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDatepicker from 'react-datepicker';

import styles from './styles.js';

const Datepicker = ({ endDate, onChange, placeholderText, selectsRange, selected, startDate }) => {
  const theme = useTheme();
  return (
    <div css={styles.datepicker(theme)}>
      <ReactDatepicker
        endDate={endDate}
        onChange={onChange}
        placeholderText={placeholderText}
        selected={selected}
        selectsRange={selectsRange}
        startDate={startDate}
      />
    </div>
  );
};

const valueTypes = [PropTypes.number, PropTypes.instanceOf(Date), PropTypes.string];

Datepicker.defaultProps = {
  endDate: undefined,
  placeholderText: undefined,
  selected: undefined,
  selectsRange: false,
  startDate: undefined,
};

Datepicker.propTypes = {
  endDate: PropTypes.oneOfType(valueTypes),
  onChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
  selected: PropTypes.oneOfType(valueTypes),
  selectsRange: PropTypes.bool,
  startDate: PropTypes.oneOfType(valueTypes),
};

export default Datepicker;

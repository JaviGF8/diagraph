import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDatepicker from 'react-datepicker';

import utils from 'utils';

import styles from './styles';

const Datepicker = ({
  dateFormat,
  endDate,
  maxDate,
  minDate,
  onChange,
  placeholderText,
  selectsRange,
  selected,
  startDate,
}) => {
  const theme = useTheme();
  return (
    <div css={styles.datepicker(theme)}>
      <ReactDatepicker
        dateFormat={dateFormat}
        endDate={endDate}
        maxDate={maxDate}
        minDate={minDate}
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
  dateFormat: utils.dateManager.DATE_FORMAT,
  endDate: undefined,
  maxDate: undefined,
  minDate: undefined,
  placeholderText: undefined,
  selected: undefined,
  selectsRange: false,
  startDate: undefined,
};

Datepicker.propTypes = {
  dateFormat: PropTypes.string,
  endDate: PropTypes.oneOfType(valueTypes),
  maxDate: PropTypes.oneOfType(valueTypes),
  minDate: PropTypes.oneOfType(valueTypes),
  onChange: PropTypes.func.isRequired,
  placeholderText: PropTypes.string,
  selected: PropTypes.oneOfType(valueTypes),
  selectsRange: PropTypes.bool,
  startDate: PropTypes.oneOfType(valueTypes),
};

export default Datepicker;

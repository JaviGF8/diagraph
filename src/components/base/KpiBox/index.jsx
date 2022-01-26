import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

const KpiBox = ({ text, value }) => {
  const theme = useTheme();
  return (
    <div css={styles.kpiBox(theme)}>
      <div className="kpi-text">{text}</div>
      <div className="kpi-value">{value}</div>
    </div>
  );
};

KpiBox.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default KpiBox;

import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import { X } from 'react-feather';

import Button from 'components/base/Button';

import styles from './styles';

const Tabs = ({ activeTab, clearable, onChange, onClose, tabs }) => {
  const theme = useTheme();
  return (
    <div css={styles.tabs(theme)}>
      {tabs.map(({ className, color, label, value }) => (
        <div
          key={value}
          className={`tab${className ? ` ${className}` : ''}${value === activeTab ? ' selected-tab' : ''}`}
        >
          <Button
            onClick={() => {
              onChange(value);
            }}
            text={label}
          />
          {clearable && (
            <Button
              className="close-tab"
              color={color || 'primary'}
              onClick={() => {
                onClose?.(value);
              }}
            >
              <X />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

Tabs.defaultProps = {
  clearable: false,
  onClose: undefined,
};

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  clearable: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  tabs: PropTypes.arrayOf(Object).isRequired,
};

export default Tabs;

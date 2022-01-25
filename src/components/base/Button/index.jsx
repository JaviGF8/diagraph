import { useTheme } from '@emotion/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';

import styles from './styles';

const Button = ({
  id,
  className,
  children,
  color,
  disabled,
  leftAddon,
  onClick,
  onMouseOver,
  rightAddon,
  tabIndex,
  text,
  type,
}) => {
  const theme = useTheme();

  const clickButton = (event) => {
    event.target.blur();

    if (!disabled && onClick) {
      return onClick();
    }

    return () => false;
  };

  return (
    <button
      id={id}
      className={classNames(color, className, { disabled })}
      css={styles.button(theme)}
      disabled={disabled}
      onClick={clickButton}
      onFocus={onMouseOver}
      onMouseOver={onMouseOver}
      tabIndex={tabIndex}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {leftAddon &&
        cloneElement(leftAddon, {
          className: classNames('button-prefix', leftAddon.props.className),
        })}
      {text && <div className="button-text">{text}</div>}
      {children}
      {rightAddon &&
        cloneElement(rightAddon, {
          className: classNames('button-suffix', rightAddon.props.className),
        })}
    </button>
  );
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  color: 'primary',
  disabled: false,
  id: undefined,
  leftAddon: undefined,
  onClick: undefined,
  onMouseOver: undefined,
  rightAddon: undefined,
  tabIndex: undefined,
  text: undefined,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  leftAddon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  rightAddon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tabIndex: PropTypes.number,
  text: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
};

export default Button;

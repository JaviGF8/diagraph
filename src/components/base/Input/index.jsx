import { useTheme } from '@emotion/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement, createRef, useState } from 'react';
import { X } from 'react-feather';

import Button from 'components/base/Button';

import styles from './styles';

const Input = ({
  accept,
  className,
  clearable,
  disabled,
  error,
  id,
  leftAddon,
  name,
  onBlur,
  onChange,
  onClick,
  readOnly,
  rightAddon,
  placeholder,
  type,
  value,
  ...rest
}) => {
  const theme = useTheme();
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const fileInputRef = createRef();
  const isFile = type === 'file';
  const isRadio = type === 'radio';
  const isCheckbox = type === 'checkbox';

  const clickClear = () => {
    if (onChange) {
      onChange('');
    }
  };

  const changeFile = (e) => {
    e.preventDefault();
    const file = e?.target?.files?.length ? e.target.files[0] : null;

    if (onChange) {
      onChange(file);
    }
  };

  const clickInput = () => {
    if (!disabled && fileInputRef?.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={classNames(
        {
          disabled,
          error: !!error,
          focused,
          hovered,
          filled: !!value,
          prefixed: !!leftAddon,
          checkbox: isCheckbox,
          radio: isRadio,
        },
        className,
      )}
      css={styles.input(theme)}
    >
      {placeholder && <label htmlFor={name}>{placeholder}</label>}
      <div>
        <div className="input-container">
          {leftAddon &&
            cloneElement(leftAddon, {
              className: classNames('input-prefix', { disabled }, leftAddon.props.className),
            })}
          {isFile && (
            <input
              accept={accept}
              className="hidden-input"
              disabled={disabled}
              name={name}
              onChange={changeFile}
              ref={fileInputRef}
              type="file"
            />
          )}
          <input
            {...rest}
            autoComplete="new-password"
            disabled={disabled}
            id={id}
            name={name}
            onBlur={(e) => {
              if (!disabled) {
                setFocused(false);

                if (onBlur) {
                  onBlur(e);
                }
              }
            }}
            onChange={(e) => onChange && !isFile && onChange(e.target[isCheckbox ? 'checked' : 'value'])}
            onClick={isFile ? clickInput : onClick}
            onFocus={(e) => {
              setFocused(true);
              if (rest.onFocus) {
                rest.onFocus(e);
              }
              if (e.target.autocomplete) {
                e.target.autocomplete = 'new-password';
              }
            }}
            onMouseEnter={(e) => {
              setHovered(true);
              if (rest.onMouseEnter) {
                rest.onMouseEnter(e);
              }
            }}
            onMouseLeave={(e) => {
              setHovered(false);
              if (rest.onMouseLeave) {
                rest.onMouseLeave(e);
              }
            }}
            readOnly={readOnly || isFile}
            value={value}
            type={isFile ? 'text' : type}
          />
          {(isCheckbox || isRadio) && <span className="checkmark" />}
          {clearable && !isCheckbox && !isRadio && !!value && (
            <Button className="clear-button" color="transparent" onClick={clickClear} tabIndex={-1}>
              <X />
            </Button>
          )}
          {rightAddon &&
            cloneElement(rightAddon, {
              className: classNames('input-suffix', { disabled }, rightAddon.props.className),
            })}
        </div>
      </div>
      <span className={classNames({ hidden: !error })}>{error}</span>
    </div>
  );
};

Input.defaultProps = {
  accept: undefined,
  checked: undefined,
  className: undefined,
  clearable: false,
  disabled: false,
  error: undefined,
  id: undefined,
  leftAddon: undefined,
  onBlur: undefined,
  onChange: undefined,
  onClick: undefined,
  placeholder: undefined,
  readOnly: false,
  rightAddon: undefined,
  type: 'text',
  value: undefined,
};

Input.propTypes = {
  accept: PropTypes.string,
  checked: PropTypes.bool,
  className: PropTypes.string,
  clearable: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
  leftAddon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  rightAddon: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  type: PropTypes.oneOf(['checkbox', 'file', 'number', 'radio', 'text']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Input;

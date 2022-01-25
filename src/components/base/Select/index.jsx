import { useTheme } from '@emotion/react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';

import Button from 'components/base/Button';
import Input from 'components/base/Input';

import useClickOutside from 'hooks/useClickOutside';
import useKeyboardClick from 'hooks/useKeyboardClick';
import useOnBlur from 'hooks/useOnBlur';

import styles from './styles';

const Select = ({
  className,
  clearable,
  disabled,
  error,
  getLabel,
  getValue,
  limit,
  name,
  onBlur,
  onChange,
  openUp,
  options,
  placeholder,
  searchable,
  value,
  ...rest
}) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState();
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [focusedOption, setFocusedOption] = useState(-1);
  const [max, setMax] = useState(5);
  const [min, setMin] = useState(0);
  const [openTop, setOpenTop] = useState(false);
  const selectRef = createRef();
  const optionsRef = useRef();

  const closeSelect = () => {
    if (expanded) {
      setExpanded(false);
      setFocusedOption(-1);
    }
  };

  useClickOutside(selectRef, closeSelect);
  useOnBlur(selectRef, closeSelect);

  const filterOptions = (val) => {
    setFilter(val);
    if (val || val === '') {
      onChange();
    }
  };

  const onClickOption = (elem) => {
    filterOptions();
    onChange(elem);
    closeSelect();
  };

  const changeExpanded = (expand) => {
    if (!disabled) {
      setExpanded(expand);
    }
  };

  useEffect(() => {
    if (filter) {
      let newOptions = options.filter((opt) => getLabel(opt)?.toLowerCase().includes(filter.toLowerCase()));
      if (limit) {
        newOptions = newOptions.splice(0, limit);
      }
      setFilteredOptions(newOptions);
    } else {
      setFilteredOptions(!!limit && limit > 0 && options?.length ? options.splice(0, limit) : options || []);
    }
  }, [filter, options, limit]);

  useEffect(() => {
    setOpenTop(openUp);
  }, [openUp]);

  const getInputValue = () => {
    if (value) {
      return getLabel(value);
    }
    if (searchable && filter) {
      return filter;
    }
    return '';
  };

  const optionMouseOver = (index) => {
    setFocusedOption(index);
  };

  const onClickUp = (event) => {
    if (expanded && focusedOption > -1 && event) {
      const newIndex = focusedOption - 1;
      setFocusedOption(newIndex);
      if (newIndex <= min) {
        optionsRef.current?.childNodes?.[newIndex]?.focus();
        setMin(newIndex);
        setMax(newIndex + 5);
      }
    }
  };

  const onClickDown = (event) => {
    if (expanded && focusedOption < filteredOptions.length - 1 && event) {
      const newIndex = focusedOption + 1;
      setFocusedOption(newIndex);
      if (newIndex >= max && max < filteredOptions?.length) {
        optionsRef.current?.childNodes?.[newIndex]?.focus();
        setMax(newIndex);
        setMin(newIndex - 5);
      }
    }
  };

  const onClickEnter = () => {
    if (expanded && focusedOption > -1 && focusedOption < filteredOptions.length) {
      onClickOption(filteredOptions[focusedOption]);
    }
    closeSelect();
  };

  useKeyboardClick(selectRef, { onClickDown, onClickUp, onClickEnter, onClickEscape: closeSelect });

  return (
    <div
      className={classNames(className, { disabled, 'open-top': openTop })}
      css={styles.select(theme)}
      ref={selectRef}
    >
      <Input
        autoComplete="false"
        clearable={clearable}
        disabled={disabled}
        error={error}
        name={name}
        onBlur={onBlur}
        onClick={() => changeExpanded(true)}
        onChange={searchable ? (val) => filterOptions(val) : () => onClickOption()}
        onFocus={() => changeExpanded(true)}
        placeholder={placeholder}
        readOnly={!searchable}
        rightAddon={<ChevronDown className={classNames({ expanded })} onClick={() => changeExpanded(!expanded)} />}
        value={getInputValue()}
        {...rest}
      />
      <div className={classNames('select-options', { expanded })} ref={optionsRef}>
        {filteredOptions?.length > 0 &&
          filteredOptions.map((opt, idx) => (
            <Button
              className={classNames({ selected: value === opt, focused: idx === focusedOption })}
              color="transparent"
              disabled={!expanded}
              key={getValue(opt)}
              onClick={() => onClickOption(opt)}
              onMouseOver={() => optionMouseOver(idx)}
              text={getLabel(opt)}
            />
          ))}
      </div>
    </div>
  );
};

Select.defaultProps = {
  className: undefined,
  clearable: false,
  disabled: false,
  error: undefined,
  limit: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  openUp: false,
  options: [],
  placeholder: undefined,
  searchable: false,
  value: undefined,
};

Select.propTypes = {
  className: PropTypes.string,
  clearable: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  getLabel: PropTypes.func.isRequired,
  getValue: PropTypes.func.isRequired,
  limit: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  openUp: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  searchable: PropTypes.bool,
  value: PropTypes.string,
};

export default Select;

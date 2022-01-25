import PropTypes from 'prop-types';
import React, { useEffect, useMemo } from 'react';
import { useState } from 'react/cjs/react.development';

import Input from 'components/base/Input';
import Modal from 'components/base/Modal';
import Select from 'components/base/Select';

const options = [
  { value: 'pr-wip-time' },
  { value: 'pr-wip-count' },
  { value: 'pr-review-time' },
  { value: 'pr-review-count' },
  { value: 'pr-merging-time' },
  { value: 'pr-merging-count' },
  { value: 'pr-release-time' },
  { value: 'pr-release-count' },
  { value: 'pr-lead-time' },
  { value: 'pr-lead-count' },
  { value: 'pr-cycle-time' },
  { value: 'pr-cycle-count' },
  { value: 'pr-opened' },
  { value: 'pr-reviewed' },
  { value: 'pr-not-reviewed' },
  { value: 'pr-merged' },
  { value: 'pr-rejected' },
  { value: 'pr-closed' },
  { value: 'pr-done' },
];

const NewTabModal = ({ onAccept, onHide, show }) => {
  const [errors, setErrors] = useState({ name: '', option: '' });
  const [name, setName] = useState('');
  const [option, setOption] = useState();

  const accept = () => {
    if (name && option?.value) {
      onAccept(name, option?.value);
      onHide();
    }
  };

  const buttons = useMemo(
    () => [
      {
        id: 'accept',
        onClick: accept,
        text: 'Accept',
      },
    ],
    [onAccept, name, option],
  );

  useEffect(() => {
    setErrors({
      name: !name ? 'Required' : '',
      option: !option ? 'Required' : '',
    });
  }, [name, option]);

  useEffect(() => {
    if (show) {
      setName('');
      setOption();
      setErrors({
        name: '',
        option: '',
      });
    }
  }, [show]);

  return (
    <Modal buttons={buttons} onHide={onHide} show={show} title="New tab">
      <Input error={errors.name} name="name" onChange={setName} placeholder="Tab name" value={name} />
      <Select
        error={errors.option}
        getLabel={({ value }) => value}
        getValue={({ value }) => value}
        onChange={setOption}
        options={options}
        placeholder="Type"
        value={option}
      />
    </Modal>
  );
};

NewTabModal.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default NewTabModal;

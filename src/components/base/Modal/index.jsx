import { useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import reactDom from 'react-dom';
import { X } from 'react-feather';

import Button from 'components/base/Button';

import useClickOutside from 'hooks/useClickOutside';

import styles from './styles';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);
const element = document.createElement('div');
modalRoot.appendChild(element);

const Modal = ({ buttons, children, className, onHide, show, showCancel, showFooter, title }) => {
  const modalRef = createRef();
  const theme = useTheme();

  useClickOutside(modalRef, onHide);

  return reactDom.createPortal(
    show ? (
      <div css={styles.modal(theme)} className={className}>
        <div className="modal-dialog" ref={modalRef}>
          <div className="modal-header">
            <h4>{title}</h4>
            <Button className="btn-close" color="transparent" onClick={onHide}>
              <X />
            </Button>
          </div>
          <div className="modal-body">{children}</div>
          {showFooter && (
            <div className="modal-footer">
              {buttons &&
                buttons.length > 0 &&
                buttons.map((button) => (
                  <Button
                    color={button.color}
                    disabled={button.disabled}
                    id={button.id}
                    key={button.id}
                    onClick={button.onClick}
                    text={button.text}
                  />
                ))}
              {showCancel && <Button color="secondary" onClick={onHide} text="Cancel" />}
            </div>
          )}
        </div>
      </div>
    ) : (
      <div />
    ),
    element,
  );
};

Modal.defaultProps = {
  buttons: undefined,
  className: undefined,
  show: false,
  showCancel: true,
  showFooter: true,
};

Modal.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string,
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool,
  showCancel: PropTypes.bool,
  showFooter: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Modal;

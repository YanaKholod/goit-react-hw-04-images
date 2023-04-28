import React, { useEffect } from 'react';
import { Styled } from './StyledModal';
import PropTypes from 'prop-types';

const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <Styled.Wrapper onClick={onClose}>
      <Styled.ModalSize>
        <img src={largeImageURL} alt="" />
      </Styled.ModalSize>
    </Styled.Wrapper>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  largeImageURL: PropTypes.string,
};

export default Modal;

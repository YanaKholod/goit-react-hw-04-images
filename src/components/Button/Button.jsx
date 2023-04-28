import React from 'react';
import { Styled } from './StyleButton';
import PropTypes from 'prop-types';

export const ButtonLoadMore = ({ label, handleLoadMore }) => (
  <Styled.Button type="button" onClick={handleLoadMore}></Styled.Button>
);

export const ButtonClear = ({ onClickClear }) => (
  <Styled.ClearButton type="button" onClick={onClickClear}></Styled.ClearButton>
);

ButtonLoadMore.propTypes = {
  label: PropTypes.string,
  handleLoadMore: PropTypes.func,
};

ButtonClear.propTypes = {
  onClickClear: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleSection';

const Section = ({ children }) => <Styled.Section>{children}</Styled.Section>;

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;

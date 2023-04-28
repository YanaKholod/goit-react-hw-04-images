import React from 'react';
import PropTypes from 'prop-types';
import { Styled } from './StyleGalleryItem';

const GalleryItem = ({ webformatURL, largeImageURL, onImageClick }) => {
  return (
    <Styled.Item>
      <Styled.ImgItem
        src={webformatURL}
        alt=""
        onClick={() => onImageClick(largeImageURL)}
      />
    </Styled.Item>
  );
};

GalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImageClick: PropTypes.func,
};

export default GalleryItem;

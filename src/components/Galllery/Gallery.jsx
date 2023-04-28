import React from 'react';
import GalleryItem from 'components/GalleryItem.jsx/GalleryItem';
import PropTypes from 'prop-types';
import { Styled } from './StyleGallery';

const Gallery = ({ images, onImageClick }) => {
  return (
    <Styled.Wrapper>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <GalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          onImageClick={onImageClick}
        />
      ))}
    </Styled.Wrapper>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ),
  onImageClick: PropTypes.func,
};

export default Gallery;

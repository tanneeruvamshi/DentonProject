import React, { useState } from 'react';
import { GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once

const images = [
  { src: 'path-to-image1.jpg', title: 'Image 1', description: 'Description 1' },
  { src: 'path-to-image2.jpg', title: 'Image 2', description: 'Description 2' },
  { src: 'path-to-image3.jpg', title: 'Image 3', description: 'Description 3' },
  // More images
];

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <GridList cellHeight={180} cols={3}>
        {images.map((img, index) => (
          <GridListTile key={img.src}>
            <img src={img.src} alt={img.title} onClick={() => handleOpen(index)} />
            <GridListTileBar
              title={img.title}
              subtitle={<span>{img.description}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${img.title}`} style={{ color: 'rgba(255, 255, 255, 0.54)' }}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

      {isOpen && (
        <Lightbox
          mainSrc={images[currentImage].src}
          nextSrc={images[(currentImage + 1) % images.length].src}
          prevSrc={images[(currentImage + images.length - 1) % images.length].src}
          onCloseRequest={handleClose}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % images.length)
          }
          imageTitle={images[currentImage].title}
          imageCaption={images[currentImage].description}
        />
      )}
    </div>
  );
};

export default ImageGallery;

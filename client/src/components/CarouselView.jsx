import React from 'react';
import Photo from './Photo.jsx';
import ImageSlider from './ImageSlider.jsx';

const CarouselView = ({ photos, currentPhoto, handleClick, translateValue }) => (
  <div className="carousel-page-container">
    <div className="return-container">
      <button type="button" name="return" onClick={e => handleClick(e)}>
        <img className="return" name="return" src="./images/return.svg" alt="return-nav" onClick={e => handleClick(e)} />
      </button>
    </div>
    <div className="main-content-container">
      <div className="main-photo-nav-container">
        <div className="nav-button-container">
          <button type="button" name="back" onClick={e => handleClick(e)}>
            <img className="back" name="back" src="./images/left-arrow.svg" alt="back-nav" onClick={e => handleClick(e)} />
          </button>
        </div>
        <div>
          <Photo photo={currentPhoto} />
        </div>
        <div className="nav-button-container">
          <button type="button" name="forward" onClick={e => handleClick(e)}>
            <img className="forward" name="forward" src="./images/right-arrow.svg" alt="forward-nav" onClick={e => handleClick(e)} />
          </button>
        </div>
      </div>
      <figcaption>
        <div className="fig-caption-space">
          <div className="fig-caption-top">
            <div className="photo-details">
              <div className="photo-description">
                {`${currentPhoto.photoNum}/${photos.length}: ${currentPhoto.description}`}
              </div>
              <div>
                <button type="button">
                  <span>
                    Hide photo list
                    insert svg
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="thumbnail-view-container">
            <ImageSlider photos={photos} handleClick={handleClick} translateValue={translateValue} />
          </div>
        </div>
      </figcaption>
    </div>
  </div>
);


export default CarouselView;

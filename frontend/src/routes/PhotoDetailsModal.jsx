import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

export const PhotoDetailsModal = (props) => {
  const {photos, photoID, favicon, handleFavicon, handleCountFavicon } = props

  const details = photos.find(el => el.id === photoID)

  return (
    <div className='photo-details-modal'>
      <button className='photo-details-modal--close-button' onClick={props.handleModal}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='modal-main'>
        <div className='modal-image'>
          <PhotoFavButton
            favicon={favicon[photoID]} 
            handleFavicon={() => handleFavicon(photoID)} 
            handleCountFavicon={() => handleCountFavicon(favicon[photoID])}
          />
          <img className='photo-details-modal--image' src={details.urls.regular} />
          <div className='user-info'>
            <img className='photo-list--user-profile' src={details.user.profile}/>
            <div className='photo-list--user-details'>
              <div className='photo-list--user-info'>
                {details.user.username}
              </div>
              <div className='photo-list--user-location'>
                {details.location.city}, {details.location.country}
              </div>
            </div>
          </div>
        </div>
        <div className='modal-similar--images'>
          <p className='photo-details-modal--header'>Related Photos</p>
          <PhotoList 
           photos={photos}  
           favicon={favicon}
           handleFavicon={handleFavicon}
           handleCountFavicon={handleCountFavicon}
           />
        </div>
      </div>
    </div>
  )
}

export default PhotoDetailsModal;
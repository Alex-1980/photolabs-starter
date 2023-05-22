import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = (props) => {
  console.log(props)
  const {modalData} = props
  
  const simPhotosArray = Object.values(modalData.similar_photos);
  const simPhotos = simPhotosArray.map((photo) => {
    return (<div className='photo-details-modal--images' key={photo.id}>
      <PhotoFavButton />
      <img className='modal-similar--image' key={photo.id} src={photo.urls.regular} />
      <div className='user-info'>
        <img className='photo-list--user-profile' src={photo.user.profile}/>
        <div className='photo-list--user-details'>
          <div className='photo-list--user-info'>
            {photo.user.username}
          </div>
          <div className='photo-list--user-location'>
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
    ) 
  })

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
          <PhotoFavButton handleFavicon={() => modalData.handleFavicon(modalData.id)} />
          <img className='photo-details-modal--image' src={modalData.imageSource} />
          <div className='user-info'>
            <img className='photo-list--user-profile' src={modalData.userImage}/>
            <div className='photo-list--user-details'>
              <div className='photo-list--user-info'>
                {modalData.userName}
              </div>
              <div className='photo-list--user-location'>
                {modalData.city}, {modalData.country}
              </div>
            </div>
          </div>
        </div>
        <div className='modal-similar--images'>
          <p className='photo-details-modal--header'>Related Photos</p>
          {simPhotos}
        </div>
      </div>
    </div>
  )
}

export default PhotoDetailsModal;
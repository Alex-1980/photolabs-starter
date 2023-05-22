
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  return(
    <div className='photo-list--item'>
      <PhotoFavButton
        favicon={props.favicon}
        handleFavicon={() => props.handleFavicon(props.id)}
        handleCountFavicon={() => props.handleCountFavicon(props.favicon)}
      />
      <img
        className='photo-list--image'
        src={props.imageSource}
        onClick={() => props.handleModal(props.id)}
      />
      <div className='user-info'>
        <img className='photo-list--user-profile' src={props.userImage}/>
        <div className='photo-list--user-details'>
          <div className='photo-list--user-info'>
            {props.userName}
          </div>
          <div className='photo-list--user-location'>
            {props.city}, {props.country}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoListItem
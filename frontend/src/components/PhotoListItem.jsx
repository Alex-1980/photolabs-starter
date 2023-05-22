
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  return(
    <article className='photo-list--item'>
      <PhotoFavButton favicon={props.favicon} handleFavicon={() => props.handleFavicon(props.id)} handleCountFavicon={() => props.handleCountFavicon(props.favicon)} />
      <img className='photo-list--image' src={props.imageSource} onClick={() => props.handleModal(props)} />
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
    </article>
  )
  // const photos = new Array(3).fill(
  //   <>
  //     <img className='photo-list--item' key={props.id} src={props.imageSource} />
  //     <PhotoFavButton />
  //   </>
  // )

  // return (
  //   photos
  // )
  // for(let i = 0; i < photos.length; i++) {
  //   photos[i] = (<img className='photo-list--item' key={props.id} src={props.imageSource} />)
  // }
  // return photos;
}

// PhotoListItem.defaultProps = {
//   username: 'Jacob',
//   imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//   id: 1,
//   hideUserName: false,
// }

export default PhotoListItem
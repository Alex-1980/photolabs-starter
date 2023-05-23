import React from 'react';

import PhotoListItem from './PhotoListItem'
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  console.log(props)
  const photos = 
    (props.photosByCatId === undefined) ?
      props.photos.map((photo) => {
      const {username, id, hideUserName, urls, similar_photos, user, location} = photo;
        return (
          <PhotoListItem 
            key={id} 
            id={id}
            username={username} 
            imageSource={urls.regular} 
            similar_photos={similar_photos} 
            userImage={user.profile} 
            userName={user.username} 
            city={location.city} 
            country={location.country} 
            hideUserName={hideUserName} 
            favicon={props.favicon[id]} 
            handleFavicon={props.handleFavicon} 
            handleCountFavicon={props.handleCountFavicon} 
            handleModal={props.handleModal}
          />  
        )
    }) :
    props.photosByCatId.map((photo) => {
      const {username, id, hideUserName, urls, similar_photos, user, location} = photo;
        return (
          <PhotoListItem 
            key={id} 
            id={id} 
            username={username} 
            imageSource={urls.regular} 
            similar_photos={similar_photos} 
            userImage={user.profile} 
            userName={user.username} 
            city={location.city} 
            country={location.country} 
            hideUserName={hideUserName} 
            favicon={props.favicon[id]} 
            handleFavicon={props.handleFavicon} 
            handleCountFavicon={props.handleCountFavicon} 
            handleModal={props.handleModal}
          />  
        )
    })

  return (
    <div className="photo-list">
      {photos}
    </div>
  )
}

export default PhotoList
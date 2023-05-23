import React from 'react';

import PhotoListItem from './PhotoListItem'
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const photos = 
    (props.photosByCatId && props.photosByCatId.length > 0) ?
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
    :
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
    })

  return (
    <div className="photo-list">
      {photos}
    </div>
  )
}

export default PhotoList
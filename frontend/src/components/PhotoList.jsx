import React from 'react';

import PhotoListItem from './PhotoListItem'
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const photos = props.photos.map((photo) => {
    const {username, id, hideUserName, urls, similar_photos, user, location} = photo;
      return <PhotoListItem key={id} id={id} username={username} imageSource={urls.regular} similar_photos={similar_photos} userImage={user.profile} userName={user.username} city={location.city} country={location.country} hideUserName={hideUserName} favicon={props.favicon[id]} handleFavicon={props.handleFavicon} handleCountFavicon={props.handleCountFavicon} handleModal={props.handleModal}/>  
  })

  return (
    <section className="photo-list">
      {photos}
    </section>
  )
}

// PhotoList.defaultProps = {
//   photos: [
//     {
//      username: 'Jacob',
//      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//      id: 1,
//      hideUserName: false,
//     },
//     {
//      username: 'Jacob',
//      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//      id: 2,
//      hideUserName: false,
//     },
//     {
//      username: 'Jacob',
//      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
//      id: 3,
//      hideUserName: false,
//     }
//    ]
// }

export default PhotoList
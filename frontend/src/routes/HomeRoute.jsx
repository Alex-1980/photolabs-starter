import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} handleTopic={props.handleTopic} conutFavicon={props.conutFavicon} />
      <PhotoList 
        photos={props.photos}
        photosByCatId={props.photosByCatId}
        favicon={props.favicon}
        handleFavicon={props.handleFavicon}
        handleCountFavicon={props.handleCountFavicon}
        handleModal={props.handleModal}
      />
    </div>
  )
}

export default HomeRoute;
import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={props.topics} handleTopic={props.handleTopic} />
      <FavBadge isFavPhotoExist={props.conutFavicon === 0 ? false : true} />
    </div>
  )
}

export default TopNavigation;
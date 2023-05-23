import React from 'react';

import FavIcon from './FavIcon';
import FavBadge from './FavBadge'
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list--fav-icon">
      <div
        className="photo-list--fav-icon-svg"
        onClick={() => {props.handleFavicon(); props.handleCountFavicon();}}>
        {props.favicon ? <FavBadge /> : <FavIcon />}
      </div>
    </div>
  );
}

export default PhotoFavButton;
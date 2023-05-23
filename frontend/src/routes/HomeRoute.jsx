import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


const HomeRoute = (props) => {
  // const [favicon, setFavicon] = useState({});
  // const [conutFavicon, setCountFavicon] = useState(0);


  // const handleFavicon = (id) => {
  //   if(id === undefined) {
  //     setFavicon({...favicon, [id]: false})
  //   } else {
  //     setFavicon({...favicon, [id]: !favicon[id]})
  //   }
  // }

  // const handleCountFavicon = (favicon) => {
  //   if(favicon) {
  //     setCountFavicon(conutFavicon - 1)
  //   } else {
  //     setCountFavicon(conutFavicon + 1)
  //   }
  // }

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
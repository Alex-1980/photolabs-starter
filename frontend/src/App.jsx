import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

import photos from './mocks/photos.json'

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favicon, setFavicon] = useState({});
  const [conutFavicon, setCountFavicon] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalPhotoID, setModalPhotoID] = useState(null);

  const handleFavicon = (id) => {
    if(id === undefined) {
      setFavicon({...favicon, [id]: false})
    } else {
      setFavicon({...favicon, [id]: !favicon[id]})
    }
  }

  const handleCountFavicon = (favicon) => {
    if(favicon) {
      setCountFavicon(conutFavicon - 1)
    } else {
      setCountFavicon(conutFavicon + 1)
    }
  }

  const handleModal = (id) => {
    setModal(!modal)
    setModalPhotoID(id);
  }
  
  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        handleModal={handleModal} 
        favicon={favicon} 
        handleFavicon={handleFavicon} 
        conutFavicon={conutFavicon} 
        handleCountFavicon={handleCountFavicon} 
      />
      {modal && 
        <PhotoDetailsModal
          photos={photos} 
          handleModal={handleModal}
          photoID={modalPhotoID} 
          handleFavicon={handleFavicon}
          handleCountFavicon={handleCountFavicon}
          favicon={favicon}
      />}
    </div>
  )
}
export default App
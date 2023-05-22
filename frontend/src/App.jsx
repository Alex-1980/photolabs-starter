import React from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import useApplicationData from './hooks/useApplicationData';

import photos from './mocks/photos.json'
import topics from './mocks/topics.json'

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {modal, favicon, conutFavicon, handleFavicon, handleCountFavicon, handleModal, modalPhotoID} = useApplicationData()
  
  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
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
        />
      }
    </div>
  )
}
export default App
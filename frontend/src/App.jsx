import React, {useEffect} from 'react';
import axios from 'axios';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import useApplicationData from './hooks/useApplicationData';

// import photos from './mocks/photos.json'
// import topics from './mocks/topics.json'

const App = () => {
  const {topics, setTopics, photos, setPhotos, modal, favicon, conutFavicon, handleFavicon, handleCountFavicon, handleModal, modalPhotoID} = useApplicationData()

  useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
      .then(res => {
        setTopics(res.data)
      })
  },[])

  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
      .then(res => {
        setPhotos(res.data)
      })
  },[])
  
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
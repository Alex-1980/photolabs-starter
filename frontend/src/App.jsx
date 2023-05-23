import React, {useEffect} from 'react';
import axios from 'axios';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {topics, setTopics, photos, setPhotos, photosByCatId, setPhotosByCatId, modal, favicon, conutFavicon, handleFavicon, handleCountFavicon, handleModal, modalPhotoID} = useApplicationData()

  console.log("photosByCatId", photosByCatId)

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

  function handleTopic (topicId) {
    axios.get(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => {
        console.log("data", res.data)
        console.log("topicId", topicId)
        setPhotosByCatId(res.data)
      })
  }

  return (
    <div className="App">
      <HomeRoute 
        photos={photos}
        topics={topics}
        photosByCatId={photosByCatId}
        handleTopic={handleTopic}
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
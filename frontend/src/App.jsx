import React, { useState } from 'react';

import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favicon, setFavicon] = useState({});
  const [conutFavicon, setCountFavicon] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(false);

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

  const handleModal = (data) => {
    setModal(!modal)
    setModalData(data);
  }
  
  return (
    <div className="App">
      <HomeRoute handleModal={handleModal} favicon={favicon} handleFavicon={handleFavicon} conutFavicon={conutFavicon} handleCountFavicon={handleCountFavicon} />
      {modal && <PhotoDetailsModal handleModal={handleModal} modalData={modalData} handleFavicon={handleFavicon} />}
    </div>
  )
}
export default App
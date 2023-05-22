import { useState } from 'react';

const useApplicationData = () => {
  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);
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

  return {topics, setTopics, photos, setPhotos, modal, favicon, conutFavicon, handleFavicon, handleCountFavicon, handleModal, modalPhotoID}
}

export default useApplicationData;
import { useState, useReducer } from 'react';

export const ACTIONS = {
  ADD_FAV: "ADD_FAV",
  REMOVE_FAV: "REMOVE_FAV"
}

const initialState = {
  favicon: {}
}

const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAV:
      console.log("action", action)
      {
        return {
          ...state, favicon: {...state.favicon, [action.payload.id]: true}
        };
      }
      
      case ACTIONS.REMOVE_FAV:
        console.log("action", action)
        {
        return {
          ...state, favicon: {...state.favicon, [action.payload.id]: false}
        };
      }

    default:
      return state;
  }
};

const useApplicationData = () => {
  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [photosByCatId, setPhotosByCatId] = useState([]);
  // const [favicon, setFavicon] = useState({});
  const [conutFavicon, setCountFavicon] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalPhotoID, setModalPhotoID] = useState(null);
  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleFavicon = (id) => {
    if (state.favicon[id]) {
      dispatch({ type: ACTIONS.REMOVE_FAV, payload: { id } });
      // setFavicon({...favicon, [id]: false})
    } else {
      dispatch({ type: ACTIONS.ADD_FAV, payload: { id } });
      // setFavicon({...favicon, [id]: !favicon[id]})
    }
  };

  const handleCountFavicon = (favicon) => {
    if (favicon) {
      setCountFavicon(conutFavicon - 1);
    } else {
      setCountFavicon(conutFavicon + 1);
    }
  };

  const handleModal = (id) => {
    setModal(!modal);
    setModalPhotoID(id);
  };

  return { topics, setTopics, photos, setPhotos, photosByCatId, setPhotosByCatId, modal, favicon: state.favicon, conutFavicon, handleFavicon, handleCountFavicon, handleModal, modalPhotoID };
};

export default useApplicationData;
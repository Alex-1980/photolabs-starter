import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  return (
    <span className="topic-list--item">
      {props.title}
    </span>
  )
}

export default TopicListItem
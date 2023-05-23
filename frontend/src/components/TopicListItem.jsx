import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  return (
    <span className="topic-list--item" onClick={() => {props.handleTopic(props.id)}}>
      {props.title}
    </span>
  )
}

export default TopicListItem
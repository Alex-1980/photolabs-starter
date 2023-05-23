import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';


const TopicList = (props) => {
  const topics = props.topics.map((topic) => {
    const {id, title} = topic;
    return <TopicListItem key={id} id={id} title={title} handleTopic={props.handleTopic} />
  })

  return (
    <div className="top-nav-bar--topic-list">
      {topics}
    </div>
  )
}

export default TopicList
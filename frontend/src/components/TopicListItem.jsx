import React from 'react';

import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  return (
    <span className="topic-list--item">
      {props.title}
    </span>
  )

  // const topics = new Array(3).fill(
  //   <span className="topic-list--item">
  //     {props.label}
  //   </span>
  // )

  // return (
  //   topics
  // )
}

// TopicListItem.defaultProps = {
//   id: 1,
//   label: 'Nature',
//   link: 'link placeholder' 
// }

export default TopicListItem
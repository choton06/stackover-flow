import React from 'react'

import LeftSideBar from '../../components/LeftSidebar/LeftSideBar'
import TagsList from './TagsList'
import './Tags.css'
const Tags = () => {
  const  tagsList =[
    {
        id: 1,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that"
     },
     {
        id: 2,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that"
     },
     {
        id: 3,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that"
     }

  ]
  return (
    <div className='home-container-1'>
        <LeftSideBar />
        <div className="home-container-2">
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'> A tag is a keyword or label that categorizes your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className="tags-list-container">
                {
                    tagsList.map((tag) =>(
                        <TagsList tag={tag} key={tagsList.id}/>

                    ))
                }
            </div>
        </div>
    </div>

  )
}

export default Tags
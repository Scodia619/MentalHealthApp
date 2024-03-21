import React from 'react'
import AddPost from '../components/AddPost'

function Community() {
  return (
    <section className='community-page'>
        <div className="buttons">
            <button>Add Post</button>
            <button>Topics</button>
        </div>
        <AddPost />
    </section>
  )
}

export default Community
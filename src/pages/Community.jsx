import React, { useState, useEffect } from 'react'
import AddPost from '../components/AddPost'
import { getCommunityPosts } from '../../api'

function Community() {

    const [communityPosts, setCommunityPosts] = useState([])

    useEffect(()=>{
        getCommunityPosts()
        .then((posts) => {
            setCommunityPosts(posts)
        })
    }, [])

  return (
    <section className='community-page'>
        <div className="buttons">
            <button>Add Post</button>
            <button>Topics</button>
        </div>
        <AddPost />
        {communityPosts.map((post)=>{
            return <li key={post.post_id}>{post.post_id}</li>
        })}
    </section>
  )
}

export default Community
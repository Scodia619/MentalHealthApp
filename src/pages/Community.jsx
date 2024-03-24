import React, { useState, useEffect } from 'react'
import AddPost from '../components/AddPost'
import { getCommunityPosts } from '../../api'

function Community() {

    const [communityPosts, setCommunityPosts] = useState([])
    const [showForm, setFormPost] = useState(false)

    useEffect(()=>{
        getCommunityPosts()
        .then((posts) => {
            setCommunityPosts(posts)
        })
    }, [])

    //Creates React Collapasble Component
    const showFormFunction = () => {
        setFormPost(!showForm)
    }

  return (
    <section className='community-page'>
        <div className="buttons">
            <button onClick={showFormFunction}>Add Post</button>
            <button>Topics</button>
        </div>
        {showForm ? <AddPost /> : <></>}
        {communityPosts.map((post)=>{
            return <li key={post.post_id}>{post.post_id}</li>
        })}
    </section>
  )
}

export default Community
import React from 'react'

function AddPost() {
  return (
    <section className='add-post'>
        <form className='add-post-form'>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" cols="30" rows="10"></textarea>
            <button>Submit</button>
        </form>
    </section>
  )
}

export default AddPost
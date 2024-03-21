import React from 'react'

function AddPost() {
  return (
    <section className='add-post'>
        <form className='add-post-form'>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" className='form-input'/>
            <label htmlFor="content">Content</label>
            <textarea name="content" id="content" className='form-input'></textarea>
            <button className="form-submit">Submit</button>
        </form>
    </section>
  )
}

export default AddPost
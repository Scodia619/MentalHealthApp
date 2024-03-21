import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <section className='nav-bar'>
        <div className='left-nav'>
            <Link to="/"><h1>Home</h1></Link>
            <Link to="/habit-tracker"><h1>Habit Tracker</h1></Link>
            <Link to="/journal"><h1>Journal</h1></Link>
            <Link to="/community"><h1>Community</h1></Link>
            <Link to="/resources"><h1>Resources</h1></Link>
        </div>
        <div className="right-nav">
            <Link to="/login"><h1>Login</h1></Link>
        </div>
    </section>
  )
}

export default NavBar
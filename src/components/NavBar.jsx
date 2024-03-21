import React from 'react'

function NavBar() {
  return (
    <section className='nav-bar'>
        <div className='left-nav'>
        <h1>Home</h1>
        <h1>Habit Tracker</h1>
        <h1>Journal</h1>
        <h1>Community</h1>
        <h1>Resources</h1>
        </div>
        <div className="right-nav">
            <h1>Login</h1>
        </div>
    </section>
  )
}

export default NavBar
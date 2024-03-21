import './App.css'

import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Habits from './pages/Habits'
import Journal from './pages/Journal'
import Community from './pages/Community'
import Resources from './pages/Resources'
import Login from './pages/Login'

function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habit-tracker" element={<Habits />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App

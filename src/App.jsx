import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import TeamsPage from './pages/TeamsPage'
import Playoffs from './pages/Playoffs'
import TopScorers from './pages/TopScorers'
import News from './pages/News'

import './App.css'

function App() {
  return (
     <Router>
      <Header title="[img]" />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/equipes" element={<TeamsPage />} />
          <Route path="/mata-mata" element={<Playoffs />} />
          <Route path="/artilharia" element={<TopScorers />} />
          <Route path="/noticias" element={<News />} />
          
        </Routes>
      </main>
      {/*<Footer/> */}
     </Router>
  )
}

export default App

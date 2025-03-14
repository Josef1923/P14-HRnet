import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './assets/page/createEmployee'
import Current from './assets/page/currentEmployee'
import './App.scss'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/employees" element={<Current />} />
      </Routes>
    </Router>
  )
}

export default App
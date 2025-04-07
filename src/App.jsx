import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './page/createEmployee'
import Current from './page/currentEmployee'
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
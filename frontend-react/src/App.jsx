import React from 'react'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Main from './components/dashboard/Main'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/Header'

import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <div className=''>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App

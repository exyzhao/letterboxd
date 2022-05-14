import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './views/Landing'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App

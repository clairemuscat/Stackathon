import React from 'react'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div className="App">
      <div className="bg" />
      <div className="bg bg2" />
      <div className="bg bg3" />
      <Navbar />
      <Routes />
    </div>
  )
}

export default App

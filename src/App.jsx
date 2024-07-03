import { useState } from 'react'
import './App.css'
import { Data } from './components/data/data'
import { Result } from './components/result/result'

function App() {
 

  return (
    <>
      <header><img src="./images/logo.svg" alt=""/></header>
      <div className="general-wrapper">
        <Data/>
        <Result/>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Header } from './components/header/header'
import { Bill } from './components/bill/bill'
import { Porcentag } from './components/porcentag/porcentag'
import { TextAmount } from './components/textAmount/textAmount'
import { TotalAmount } from './components/totalAmount/totalAmount'
import { Reset } from './components/buttonReset/buttonReset'

function App() {
 

  return (
    <>
      
      <Header/>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <Bill/>
          <Porcentag/>
        </div>

        <div className="result-wrapper"> 
          <div className="result-txt">
          <TextAmount/>
          <TotalAmount/>
          </div><Reset/>
        </div> 
      </div>
      
    </>
  )
}

export default App

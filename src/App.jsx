import { useState } from 'react'
import './index.css'
import Header from './components/header'
import Medicamentos from './components/Medicamentos'
import Search from './components/search'

function App() {
  return (
    <>
    <Header />
    <Search />
    <Medicamentos />
    </>
    
  )
}

export default App

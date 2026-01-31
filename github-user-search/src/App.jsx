import { useState } from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Search from './components/Search';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Search />
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Home from './Page/Home'
import Navbar from './Componets/Navbar'
import Window from './Page/SoftwareList'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <Home/>
     
      <Navbar/>
      <div className='px-7'>

      <Window />
      </div>

   
     </>
  )
}

export default App

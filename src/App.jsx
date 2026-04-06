import { useState } from 'react'


import './index.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AboutUs from './Pages/AboutUs'
import Career from './Pages/Career'
import ApplicationForm from './Components/ApplicationForm'
import DetailedJob from './Components/DetailedJob'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes  >
    <Route path='/' element={<Navbar></Navbar>}>
        <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
        <Route path='/careers' element={<Career></Career>}></Route>
        <Route path='/apply' element={<ApplicationForm></ApplicationForm>}></Route>
        <Route path='/jobs/:index' element={<DetailedJob></DetailedJob>}></Route>

    </Route>
    </Routes>
  )
}

export default App

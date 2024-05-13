import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidenav from './component/Sidenav'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>

<Routes>
  <Route path='/home'exact element={<Home></Home>}></Route>
  <Route path='/about' exact element={<About></About>}></Route>
  <Route path='/contact' exact element={<Contact></Contact>}></Route>
  <Route path='/dashboard' exact element ={<Sidenav></Sidenav>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from 'antd'
import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen'
import DashBoardScreen from './Screens/DashBoardScreen'
import LandingPageScreen from './Screens/LandingPageScreen'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    {/* <LoginScreen/> */}
    {/* <SignupScreen/> */}
    {/* <DashBoardScreen/> */}
    {/* <LandingPageScreen/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

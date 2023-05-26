import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Button } from 'antd'
import LoginScreen from './Screens/LoginScreen'
import SignupScreen from './Screens/SignupScreen'
import DashBoardScreen from './Screens/DashBoardScreen'
import LandingPageScreen from './Screens/LandingPageScreen'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginScreen/>
    {/* <SignupScreen/> */}
    {/* <DashBoardScreen/> */}
    {/* <LandingPageScreen/> */}
    </>
  )
}

export default App

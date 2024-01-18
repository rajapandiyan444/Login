import React, { useEffect, useState } from 'react'
import './components/css/bootstrap.min.css'
import Register from './components/Login/Register'
import { Route, Routes, useNavigate } from 'react-router'
import User from './components/Login/User'
import New from './components/Login/Login'
import { Authen, log } from './components/Api/Autho'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { sear } from './components/Store/Load'
import Login from './components/Login/Login'
import Navbar from './components/Navbar'
function App1() {
  // let [sucess,setSuccess]=useState(false)
  let sucess = useSelector((data) => { return data.suc })
  let nav = useNavigate()
  let dis = useDispatch()
  function swa(params) {

  }
  useEffect(() => {
    if (Authen()) {
      dis(sear(true))
      nav('/user')
    }
  }, [])
  // useEffect(()=>{
  // },[sucess[0]])

  return (

    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<h1>sorry not found this page</h1>} />
      </Routes>
    </div>
  )
}

export default App1
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Authen } from './Api/Autho'
import { logou } from './Api/Getdata'
function Navbar() {
  let nav=useNavigate()
  function logout(params) {
    logou()
    nav('/')
  }
  return (
    <div className='navbar navbar-expand-sm bg-primary'>
        <div className="navbar-brand ms-3">
            Todo List
        </div>
        <div className="navbar-toggler">
            <div className="navbar-toggler-icon"></div>
        </div>
        <div className="navbar-nav ms-auto">
        {Authen() && <div className="nav-link me-2 nav-items-hover"><Link className='text-decoration-none text-white' to='/user'>Dashboard</Link></div>}
         {Authen() &&    <div className="nav-link me-2"><Link className='text-decoration-none text-white' onClick={()=>{logout()}}>Log out</Link></div>}
            {!Authen() && <div className="nav-link me-2"><Link className='text-decoration-none text-white' to='/login'>Login</Link></div>}
            {!Authen() && <div className="nav-link me-2"><Link className='text-decoration-none text-white' to='/'>Register</Link></div>}
        </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { login } from '../Api/Autho'
import { Link } from 'react-router-dom'
import { Logi } from '../Api/Post'
import { setToken } from '../Api/Getdata'
function Login() {
  let crea = useNavigate()
  let [loading, isloading] = useState(false)
  let [mess,errMes]=useState(null);
 let [cusErr,setcus]=useState(false)
  let [err, setErr] = useState({ email: false, password: false, custom: false });

  let [data, setData] = useState({ email: '', password: '' })
  let [error, setError] = useState(true)

  function getDatas(datas) {
    setData((prev) => { return { ...prev, [datas.target.name]: datas.target.value } })
  }
  function submits(params) {
    setErr({ email: false, password: false, custom: false })
    setError(true)
    if (data.email == '') {
      setErr((prev) => { return { ...prev, email: true } })
      setError(false)
    }
    if (data.password == '') {
      setErr((prev) => { return { ...prev, password: true } })
      setError(false)
    }
    isloading(true)
    setError((error) => {
      if (error) {
        Logi(data).then((dat) => { 
          if(dat.idToken != null){
            setToken(dat.idToken);
            crea('/user')
          }
          setcus(false)
          if(dat.error.code == 400){
          setcus(true);
          errMes(dat.error.message)
          }
         }).catch((err) => {
          
        }).finally(() => {
          isloading(false)
        })
      } else {
        isloading(false)
      }
    })

  }

  return (
    <div className='row'>
      <div className="col-12 mt-5">
        <h1>Login Page</h1>
      </div>
      <div className="col-12 mt-3">
        <label htmlFor="" className='form-label'>Email</label>
      </div>
      <div className="col-12 mt-3">
        <input type="text" placeholder='Enter your email' className='form-control' onChange={(e) => { getDatas(e) }} name="email" id="" />
      </div>
      <div className="col-12 mt-3">
        {err.email && <div className='col-6 mt-1 text-danger'>Invalid Email</div>}
        <label htmlFor="" className='form-label'>Password</label>
      </div>
      <div className="col-12 mt-3">
        <input type="text" placeholder='Enter your password' className='form-control' onChange={(e) => { getDatas(e) }} name="password" id="" />
      </div>
      {err.password && <div className='col-12 mt-1 text-danger'>Invalid Password</div>}
      {cusErr && <div className='col-12 mt-2'>{mess}</div>}
      {loading && <div className="col-12 mt-5 d-flex justify-content-center">
        <span className='spinner-border'></span>
      </div>}
      <div className="col-6 mt-5 ">
        <span>create <Link style={{ textDecoration: 'none' }} to='/'>new account</Link></span>
      </div>
      <div className="col-6 mt-5 d-flex justify-content-center">
        <button className="btn btn-primary" disabled={loading} onClick={() => { submits() }}>Login</button>
      </div>
    </div>
  )
}

export default Login
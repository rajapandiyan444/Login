import React, { useState } from 'react'
import { Navigate, useNavigate, useH, Link } from 'react-router-dom'
import { Authen, log, login } from '../Api/Autho';
import { useDispatch } from 'react-redux';
import { sear } from '../Store/Load';
import { Post } from '../Api/Post';
import { datas, setToken } from '../Api/Getdata';

function Register() {
  let [loading, isloading] = useState(false)
 let [cusErr,setcus]=useState(false)
  let [err,setErr] = useState({displayName:false,email:false,password:false,custom:false});
  let [error,setError]=useState(true)
  let nav = useNavigate();
  let dis = useDispatch();
  let [mess,errMes]=useState(null);
  let [data,setData]=useState({displayName:'',email:'',password:''})
  // function dash(params) {
  //   dis(sear(true))
  //   nav('/user')
  //   localStorage.setItem('Token', 'Raja')                                                                       
  // }
  //
  function getDatas(datas) {
    setData((prev)=>{return {...prev,[datas.target.name]:datas.target.value}})
  }
  
  function createAccount(params) {
    setErr({displayName:false,email:false,password:false,custom:false})
    setError(true)
    setcus(false)
    if(data.displayName ==''){
      setErr((prev)=>{return {...prev,displayName:true}})
    setError(false)
    }
    if(data.email == ''){
    setErr((prev)=>{return {...prev,email:true}})
    setError(false)
    }
    if(data.password == ''){
    setErr((prev)=>{return {...prev,password:true}})
    setError(false)
    }
     isloading(true)
        setError((error)=>{
      if(error){
        Post(data).then((dat)=>{
          if(dat.idToken != null){
            setToken(dat.idToken)
            if(Authen()){
              nav('/user')
              }
          }
         if(dat.error.code==400){
        setcus(true)
        errMes(dat.error.message)
         }
          // console.log('Token',dat.idToken)
        }).then(()=>{isloading(false)}).catch((e)=>{
          // alert(e.message)
        }).finally(()=>{
            isloading(false)
          })
      }
      else{
        isloading(false)
      }
     })
     console.log(Authen())
     if(Authen()){
      nav('/user')
      }
      
  }
   
let copyErr={...err}
  return (
    <>
      <div className='row'>
        <div className="col-12 mt-5">
          <h1>Login Page</h1>
        </div>
        <div className="col-12 mt-3">
          <label htmlFor="" className='form-label'>Username</label>
          <div className="col-12 mt-3">
            <input type="text" placeholder='Enter your Name' onChange={(e)=>{getDatas(e)}} className='form-control' name="displayName" id="" />
          </div></div>
          {err.name &&<div className='col-6 mt-1 text-danger'>Invalid UserName</div>}
        <div className="col-12 mt-3">
          <label htmlFor="" className='form-label'>Email</label>
        </div>
        <div className="col-12 mt-3">
          <input type="text" placeholder='Enter your email' className='form-control' onChange={(e)=>{getDatas(e)}} name="email" id="" />
        </div>
        <div className="col-12 mt-3">
        {err.email &&<div className='col-6 mt-1 text-danger'>Invalid Email</div>}
          <label htmlFor="" className='form-label'>Password</label>
        </div>
        <div className="col-12 mt-3">
          <input type="text" placeholder='Enter your password' className='form-control' onChange={(e)=>{getDatas(e)}} name="password" id="" />
        </div>
        {err.password &&<div className='col-12 mt-1 text-danger'>Invalid Password</div>}
      {cusErr && <div className='col-12 mt-2'>{mess}</div>}
        {loading && <div className="col-12 mt-5 d-flex justify-content-center">
          <span className='spinner-border'></span>
        </div>}
        <div className="col-6 mt-5 ">
          <span>Already account created <Link style={{ textDecoration: 'none' }} to='/login'>Login</Link></span>
        </div>
        <div className="col-6 mt-5 d-flex justify-content-center">
          <button className="btn btn-primary" disabled={loading} onClick={() => { createAccount() }}>Create account</button>
        </div>
      </div>

    </>

  )
}

export default Register
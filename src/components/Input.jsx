import React, { useState } from 'react'
import { add, ser } from './Store/Slice';
import { useDispatch } from 'react-redux';

function Input() {
    let get=useDispatch();
    let [send,setSend]=useState(false)
    let [email,setEmail]=useState(false);
    let [pass,setPass]=useState(false);
    // This line is create get date from email amd password maintined to Object
    let [data,setData]=useState({email:'',pass:''});
   async function submit(params) {
    let copy=data;
    if(data.email && data.pass){
     setData({email:'',pass:''})
    fetch('https://659f7f695023b02bfe89b548.mockapi.io/todolist',{
        method:'POST',
        body:JSON.stringify(copy),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((data)=>{
        if(data.ok)
        setSend(true)
        return data.json()
    }).then((data)=>{
    }).catch(()=>{
    }).finally(()=>{
        setTimeout(()=>{
            setSend(false)
        },3000)
    })}
    else{
        if(!data.email)
        {
            setEmail(true)
        }

        if(!data.pass)
        setPass(true)
    }
    setTimeout(()=>{
setEmail(false)
setPass(false)
    },3000)
  }
  return (
    <div className='row mt-5 mb-4'>
        <div className="col-12">
            {send && <div className="alert alert-success alert-dismissible">
                <div className="btn-close"></div>
                <p>Updated successfully</p>
            </div>}
        </div>
        <div className="col-4">
            <input type="email" value={data.email} placeholder='Enter your email' onChange={(e)=>{setData((prev)=>{return {...prev,email:e.target.value}})}} className='form-control' name="" id="" />
        </div>
        <div className="col-4">
            <input type="password" value={data.pass} placeholder='Enter Your password' onChange={(e)=>{setData((prev)=> {return {...prev,pass:e.target.value}})}} className='form-control' name="" id="" />
        </div>
        <div className="col-2">
            <button className="btn btn-primary w-100" onClick={()=>{submit()}}>Submit</button>
        </div>
        <div className="col-4 ms-2 mt-3 text-danger">{email && <p>Invalid Email</p>}</div>
        <div className="col-4 mt-3 text-danger">{pass && <p>Invalid Password</p>}</div>
    </div>
  )
}
export default Input
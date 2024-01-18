
import React from 'react'
const API_BASE='https://identitytoolkit.googleapis.com/v1'
const POST='/accounts:signUp?key=AIzaSyDL5f22UyXyw2lqw4p9YQj6Kdl23VKPxQQ';
const Log='/accounts:signInWithPassword'
export let Post= async(data)=>
 {
  return fetch(`${API_BASE}${POST}`,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
        'Content-Type':'application/json'
    }
  }).then((dat)=>{ return dat.json()})


}
export let Logi=async (data)=>{
  return fetch(`${API_BASE}${Log}?key=AIzaSyDL5f22UyXyw2lqw4p9YQj6Kdl23VKPxQQ`,{
    method:"POST",
    body:JSON.stringify(data),
  credentials:'omit',
    headers:{
        'Content-Type':'application/json'
    }
  }).then((dat)=>{
  dat.headers('Access-Control-Allow-Credentials','http://your-react-app-domain.com')
     return dat.json()})
}
export let userData=async (token)=>{
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDL5f22UyXyw2lqw4p9YQj6Kdl23VKPxQQ`,{
    method:"POST",
    body:JSON.stringify({"idToken":token}),
    credentials:'same-origin',
    headers:{
        'Content-Type':'application/json',
      
    }
  }).then((dat)=>{
    if(!dat.ok)
    throw "Network error"
     return dat.json()})
}

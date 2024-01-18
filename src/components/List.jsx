import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dels, ser, upds } from './Store/Slice'
import Searchs from './Searchs'
import { sear } from './Store/Load'
function List() {
    let del=useDispatch();
    let [edit,setEdit]=useState(null)
    let ups=useDispatch()
let data=useSelector((data)=> {return data.datas})
let server=useSelector((data)=> {return data.seart})
let [len,setLen]=useState(0);
let [idEdit,serEdit]=useState(null)
let [load,isload]=useState(true)
let [err,iserr]=useState(false);
let [inv,setInv]=useState(false);
let [serData,serSet]=useState({})
let sen=useDispatch()
useEffect(()=>{
    del(sear(''))
fetch('https://659f7f695023b02bfe89b548.mockapi.io/todolist',{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
}).then((data)=>{
    if(!data.ok)
    throw new Error('Data not found');
    return data.json();
}).then((data)=>{
    if(data.length==0)
    setInv(true)
    setLen(data.length)
sen(ser(data))
}).catch((e)=>{
    iserr(true)
}).finally(()=>{
isload(false)
})
},[])
async function deletes(id,servId) {
    setLen((prev)=>{ return prev-1})
    setLen((p)=> p==0 ? setInv(true) : '')
    
console.log(server)
    fetch(`https://659f7f695023b02bfe89b548.mockapi.io/todolist/${servId}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json'
        }
    })
    del(dels(id))
}
function edits(id,email,pass,serverId) {
    setEdit(id);
    serEdit(serverId);
    serSet({email,pass})
}
async function updates(id) {
    ups(upds([id,serData]))
    fetch(`https://659f7f695023b02bfe89b548.mockapi.io/todolist/${idEdit}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(serData)
    }) 
    setEdit(null)

}
async function cancel(params) {
    setEdit(null)
}
  return (
    <div className='border mt-4 rounded-2' style={{minHeight:'450px', }}>
    <Searchs/>
    {load && <div className='d-flex justify-content-center align-items-center border' style={{height:'450px'}}><span className='spinner-border text-success'></span></div>}
    {err && <div className='  d-flex justify-content-center align-items-center border' style={{height:'450px'}}><span className='text-danger'>Sorry ! data not found</span></div>}
    {inv && <div className='  d-flex justify-content-center align-items-center border' style={{height:'450px'}}><span className='text-danger'>Invalid Data</span></div>}
        {
         !load && !err && data.filter((f)=>{ return f.email.includes(server[0])}).map((data,i)=>{
            return <div className="row p-2" key={i}>
                {edit == i ? <div className='col-12'>
                    <div className="row border rounded-3 pt-3 pb-3 mt-3 mb-3">
                        <div className="col-12">
                            <h4>Edit Value</h4>
                        </div>
                        <div className="col-3"><input value={serData.email} onChange={(e)=>{serSet((prev)=>{return {...prev,email:e.target.value}})}} type="text" className='form-control' /></div>
                        <div className="col-3"><input type="text" onChange={(e)=>{serSet((prev)=>{ return {...prev,pass:e.target.value}})}} value={serData.pass} className='form-control' /></div>
                        <div className="col-2 ms-auto"><button className="btn btn-warning w-100" onClick={()=>{cancel()}}>Cancel</button></div>
                        <div className="col-2 ms-auto"><button className="btn btn-success w-100" onClick={()=>{updates(i)}}>Update</button></div>
                    </div>
                </div> : null}
            <div className="col-4 ps-3">{data.email}</div>
            <div className="col-4 ps-3">{data.pass}</div>
            <div className="col-2"><button className="btn btn-warning w-100" onClick={()=>{edits(i,data.email,data.pass,data.id)}}>Edit</button></div>
            <div className="col-2"><button className="btn btn-danger w-100" onClick={()=>{deletes(i,data.id)}}>Delete</button></div>
        </div>
            })
        }
    </div>
  )
}
export default List
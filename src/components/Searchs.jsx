import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { sear } from './Store/Load'
function Searchs() {
  let sea=useDispatch()
  function sers(value) {
    sea(sear(value))
  }
  return (
    <div className='row mb-3 mt-3'>
        <div className="col-7 ms-3"><input onInput={(e)=>{sers(e.target.value)}} type="search" name="" placeholder='Search' className='form-control custom-search' id="" /></div>
    </div>
  )
}

export default Searchs
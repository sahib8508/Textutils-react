// import { useState } from 'react'
/* eslint-disable jsx-a11y/anchor-is-valid */
import React  from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {


  return (
    <div >
      <nav className= "navbar navbar-expand-lg navbar-light bg-green " style={{backgroundColor: props.mode==='black'? '#DDE6ED' : '#DDE6ED', color: props.mode==='black'? 'black' : 'black'}}>
                <div className="container-fluid">
                <Link className="nav-link active my-2"   to='/'>TextUtils</Link> 
                 <Link className="nav-link active mx-3 my-2" to='/'>Home</Link> 
                  <Link className="nav-link active mx-3 my-2" to='/about'>About</Link>   
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
     
        </li>
        <li >
        
        </li>
      </ul>
            
            <div className='form-check form-switch mx-3 '>
            <input className="form-check-input "  type="checkbox" role="switch" onClick={props.setBlue} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
          </div>
           <div className="form-check form-switch" >
            <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
// Navbar.propTypes = {
//    title: PropTypes.string.isRequired, 
//    abouttext : PropTypes.string
// }
//  Navbar.defaultProps = {
//   title: "sahib"
// }
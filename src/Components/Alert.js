import React from 'react'
import {capitalize}  from "lodash"

function Alert(props) {
    //JS FUNCTION TO CAPITALIZE
    // const capitalize = (word) => {
    //     const capitalize = (word) => {
    //         const lower = word.toLowerCase(); 
    //         return lower.charAt(0).toUppererCase() + lower.slice(1);
    //       
    //   }
    
  return (

 
     props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
     </div>

  )
}

export default Alert

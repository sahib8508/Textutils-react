import React, { useState } from 'react'
// import {capitalize} from "lodash"

export default function TextForm(props) {

   
    // EVENT HANDLERS :
    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase" , "success")
        
    }
    const handleUpClick3 = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase" , "success")
    }
    const handleUpClick4 = ()=>{
        let newText = (" ")
        setText(newText)
        props.showAlert("Cleared all text" , "success")
    }
    const handleUpClick5 = ()=>{
            let msg = new SpeechSynthesisUtterance();
            msg.text = text;
            window.speechSynthesis.speak(msg);
            props.showAlert("The Text is being speaked" , "success")
          
    }
    
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
      
    }

    // USE STATES :
    const [text,setText] = useState("")


  return (
   
    <> 
    <div className='container ' >
        <h1 >Enter Text To Analyze</h1>
    <div className="mb-3">
    <textarea style={{backgroundColor: props.mode==='black'? 'black' : 'white' , color: props.mode==='black'? 'white' : 'black'}}  onChange={handleOnChange} className="form-control" value={text} id="myBox"  rows="8"></textarea>
    <button  type='button' onClick={handleUpClick} className="btn btn-primary my-4 mx-2"  
> Click for uppercase</button>
    <button  onClick={handleUpClick3} className="btn btn-primary mx-2">Click for lowercase</button>
    <button  onClick={handleUpClick5} className="btn btn-primary mx-2">Click to make it speak</button>
    <button  onClick={handleUpClick4} className="btn btn-primary">Clear text</button>
    </div>
    </div>
    <div className='container'  >
        Your Text summary 
       <p>Number of words {text.split(/\s+/).length-1} and number of characters are {text.length}</p> 
       <p> Time to read (in minutes) = {0.008 * text.split(" ").length}</p>
       <h2>Preview</h2>
       <p>{text.length>0 ? text: 'Enter Text to preview' }</p>
    </div>
    </>
  )
}

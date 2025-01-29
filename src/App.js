/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('white');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type : type
  })
  setTimeout(() => {
    showAlert(null)
  }, 5000);
  }

  const toggleMode = ()=> {
    if (mode === 'white') {
      
      setMode('black');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode enabled" , "success")
      document.title=("TextUtils - Dark Mode - Home ")
     
  
    } else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled" , "success")
      document.body.style.color = 'black';
      document.title=("TextUtils - Light Mode - Home ")
    }
      
  }
  const setBlue = () => {
    if (mode === 'white') {
      setMode('black');
      document.body.style.backgroundColor = '	#000080';
      document.body.style.color = 'white';
      showAlert("Blue mode enabled" , "success");
      document.title=("TextUtils - Blue Mode - Home ")
    } else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode enabled" , "success");
      document.title=("TextUtils - Light Mode - Home ")
    }
  }

  return (
<>
        <Router>
        <Navbar setBlue={setBlue}  mode={mode} toggleMode={toggleMode}  /> 
        <Alert alert={alert} />
        <div className="container my-5">
        <Routes>
        <Route exact path="/about" element={ <About mode={mode} />} />
        </Routes>
        <Routes>
        <Route exact path="/" element={ <TextForm showAlert={showAlert} mode={mode}/>  } /> 
        </Routes>
        </div>
        </Router>

</>
  );
}

export default App;

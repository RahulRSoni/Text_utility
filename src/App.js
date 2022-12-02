import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react'
import Alert from './component/Alert';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const tonggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#1a1d45"
      showAlert(", Dark mode has been on", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "#aeedfc"
      showAlert(", Dark mode has been off", "success")
    }
  }

  return (
    <>
      <Navbar title="Text tool" about="About us" mode={mode} tonggleMode={tonggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Routes>
            <Route exact path = "/" element={<Textform heading='Enter a text here' showAlert={showAlert} mode={mode} />}/>
          <Route exact path="/about" element={<About mode={mode} />} />
            </Routes>
      </div>
  </>
  );
}

export default App;
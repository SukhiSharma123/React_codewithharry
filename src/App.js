
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Component from './components/Greed';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () =>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
      {/* Props in navbar  */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* props not passing in navbar , it will take default value */}
      {/* <Navbar /> */}
      <TextForm heading='Enter Your Text Here...' mode={mode}/>
      <About mode={mode}/>
    </>
  );
}

export default App;

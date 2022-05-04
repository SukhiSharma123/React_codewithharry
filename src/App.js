
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Component from './components/Greed';
import React, {useState} from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () =>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode has been enabled", "success");
      // to change title dyamically 
      // document.title = 'Learning ReactJs';
      // //  To blink title with what u wnat
      // setInterval(() => {
      //   document.title = 'It is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'It is really nice to learn'
      // }, 1500);
      // // blink up to here
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
      {/* Props in navbar  */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* props not passing in navbar , it will take default value */}
      {/* <Navbar /> */}
      <TextForm showAlert={showAlert} heading='Enter Your Text Here...' mode={mode}/>
      <About mode={mode}/>
    </>
  );
}

export default App;

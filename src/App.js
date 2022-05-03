
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Component from './components/Greed';

function App() {
  return (
    <>
      {/* Props in navbar  */}
      <Navbar title="TextUtils" />
      {/* props not passing in navbar , it will take default value */}
      {/* <Navbar /> */}
      {/* <TextForm heading='Enter Your Text Here...' /> */}
      <About />
    </>
  );
}

export default App;

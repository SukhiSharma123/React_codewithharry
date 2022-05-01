
import './App.css';
import Navbar from './components/Navbar';
// import Component from './components/Greed';

function App() {
  return (
    <>
      {/* Props in navbar  */}
      <Navbar title="TextUtils" />
      {/* props not passing in navbar , it will take default value */}
      {/* <Navbar /> */}
    </>
  );
}

export default App;

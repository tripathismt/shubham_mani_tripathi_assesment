import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Mainpage from './components/Mainpage'
import { useState } from 'react';
// import Lastsceen from './components/astsceen';


function App() {
  const [login,setLogin]=useState(false);
  return (
    <>
      <Header />
      <Mainpage  login={login}/>
      {/* <Lastsceen /> */}
    </>
  );
}

export default App;

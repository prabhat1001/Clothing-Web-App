import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from './components/MainPage';
import ShopArea from './components/ShopArea';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes> 
        <Route path ='/' element={<MainPage />}></Route>
        <Route path ='/shopArea' element={<ShopArea/>}></Route>
      </Routes>
      
    </Router>
  </div>
  )
}

export default App
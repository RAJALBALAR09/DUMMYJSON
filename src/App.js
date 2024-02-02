import React from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componts/Header';
import Products from './Componts/Products';
import Singleproduct from './Componts/Singleproduct';
import { Route,Routes } from 'react-router-dom';



function App() {

  
  return (
    <>
      <Header/>
      {/* <Products/>
      <Singleproduct/> */}

      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/product/:id' element={<Singleproduct/>}></Route>
      </Routes>
    </>
  );
}

export default App;

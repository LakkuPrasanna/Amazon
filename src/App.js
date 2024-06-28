import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

import { useState } from 'react';

import { BrowserRouter, Routes, Route, useLoaderData } from "react-router-dom";



import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



import HomePage from'./pages/HomePage.js';
import SignUp from './pages/SignUp.js';
import Login from './pages/Login.js';
import Details from './pages/Details.js';
import Account from './pages/Account.js';
import Productdetails from './pages/ProductDetails.js';
import Mapping from './pages/mapping.js'

import { useEffect } from 'react';
import ProductListNew from './pages/ProductListNew.js';
import Product from './pages/Product.js';
import Search from './pages/Search.js';
import Payment from './pages/Payment.js';
import BoxComponent from './Components/BoxComponent.js';



function App() {
   
    const [userdata,setUserData]=useState(JSON.parse(localStorage.getItem('saved_userid')))
    return(
        <div>
    <BrowserRouter>
    <Header></Header>
    
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
        <Route path="/homepage" element={<HomePage/>}></Route>
        <Route path="/sign" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/details/:id" element={<Details/>}></Route>
        <Route path="/account" element={<Account/>}></Route>
        <Route path="/productdetails" element={<Productdetails/>}></Route>
        <Route path="/mapping" element={<Mapping/>}></Route>
        
        <Route path="/productlistnew" element={<ProductListNew/>}></Route>
        <Route path="/payments" element={<Payment  design={<BoxComponent/>} data={userdata}/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/boxcomponent" element={<BoxComponent/>}></Route>
        

    </Routes>
    </BrowserRouter>
   
    
    </div>
    )
  
}

export default App;

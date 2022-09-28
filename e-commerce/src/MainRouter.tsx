import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Home } from './components/Home';
import { ProdDetails } from './components/ProductDetails';

export const MainRouter=()=>{
    return (<>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/proddetails/:id' element={<ProdDetails />}></Route>
    </Routes>
    </>)
}
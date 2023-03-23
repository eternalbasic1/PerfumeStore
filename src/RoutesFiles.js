import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, Navigate} from "react-router-dom"
import { About } from './Components/About';
import { Cart } from './Components/Cart';
import { Home } from './Components/Home';
import { Whatis } from './Components/Whatis';



const RoutesFiles =  
createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={ <Home/> } />
        <Route path="/whatis" element={ <Whatis/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/about" element={ <About/> } />
        </>
    ));

export default RoutesFiles
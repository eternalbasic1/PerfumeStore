import React from 'react'
import {Navigate, NavLink} from "react-router-dom";

const Header = () => {
    return(
    <div>
        <ul className="nav nav-tabs bg-dark" style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'} }>
            <div style={{display: 'flex', flexDirection:'row'}}>
            <li className="nav-item">
                <h1 style={{color:'white', fontFamily: "fantasy"}}>Perfume Nation</h1>
            </li>
            </div>

            <div style={{display: 'flex', flexDirection:'row' , justifyContent:"space-between", fontFamily:"monospace"}}>
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/cart'>Cart</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/whatis'>PerfumeNation</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/about'>About Us</NavLink>
            </li>
            
            </div>
            
            
        </ul>
    </div>
    )
}

export default Header;
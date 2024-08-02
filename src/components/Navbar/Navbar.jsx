import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./Navbar.css";
import { useState } from 'react'

// import { BeakerIcon,bars-3} from 'lucide-react';

export default function Navbar() {
    const [isOpen, setisOpen] = useState(false)
  return <>
  <div className='p-4 shadow'>
    <div className='container mx-auto flex justify-between items-center'>
        <div className='navbar-brand'>
            <h2>NAVBAR</h2>
        </div>
    

        <div className='links'>
        
        <div onClick={()=>setisOpen(!isOpen)} className='md:hidden mb-10'>
            {
                isOpen? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>:<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
            }
        


        </div>
            <ul className={`md:flex md:items-center gap-4 md:static absolute
                  md:z-auto md:w-auto  transition-all duration-500 ease-in right-4  text-white md:pl-0 z-111
                   ${isOpen ? ' right-[-399px]' :'right-4 top-14'} `}>

                <li>
                <NavLink className={({isActive}) => (isActive ? "   nav text-decoration-none fw-semibold px-3 py-2 rounded fs-5 activ-link" : "  text-decoration-none  fw-semibold fs-5")}
 to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => (isActive ? "text-decoration-none fw-semibold px-3 py-2 rounded fs-5 activ-link" : "text-decoration-none fw-semibold fs-5")} to='/portfolio'>Portfolio</NavLink>
                </li>
                <li>
                <NavLink  className={({isActive}) => (isActive ? "text-decoration-none fw-semibold px-3 py-2 rounded fs-5 activ-link" : "text-decoration-none fw-semibold fs-5")} to='/contact'>Contact</NavLink>
                </li>
            </ul>

        </div>
</div>
  </div>
  </>
}

import React from 'react'
import { useState } from 'react'
import Product from '../Product/Product'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons/faFortAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import './Portfolio.css'


export default function Portfolio() {
  const [cards, setCards] = useState([
    {imgSrc:"../images/poert1.png"},
    {imgSrc:"../images/port2.png"},
    {imgSrc:"../images/port3.png"},
    {imgSrc:"../images/port3.png"},
    {imgSrc:"../images/poert1.png"},
    {imgSrc:"../images/port2.png"}])
 
  
  return <>
  <div className='bg-white text-center '>
  <h1 className='text-5xl font-extrabold'> portfolio component</h1>
  <div className=' flex justify-center items-center'> 
               <div className='h-1.5 w-32 mt-2 line bg-black'></div>
               <i><FontAwesomeIcon icon={faStar}  />    </i> 
               <div className='h-1.5 w-32 mt-2 line bg-black'></div>


        </div>

  <div className='container p-8 mt-8 mx-auto'>
    <div className='grid grid-cols-3 gap-3'>
      {
       cards.map((product,index)=>{
          return <Product key={index} {...product} index={index}/>
        })
      }
    </div>
  </div>
  
  </div>
  
  
  </>
}

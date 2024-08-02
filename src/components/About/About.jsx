import React, { useEffect } from 'react'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons/faFortAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import "./About.css";

export default function About() {
    useEffect(()=>{
        console.log("start")

return()=>{
    console.log("dead")
}


    },[])
  return <>
     <section
      id="about"
      className="min-w-full mx-auto  bg-green-300 text-white"
    >
      <div className="container px-lg-4 mt-4">
        <div className="flex  flex-col">
          <div className=" relative flex justify-center items-center ">
            <img id='profile_img' className='w-full  ' src='../images/1.png'/>
         
        </div>
        <h1 className='text-center'>start Framework</h1>
        <div className=' flex justify-center items-center'> 
               <div className='h-1.5 w-14 mt-2 line bg-white'></div>
               <i><FontAwesomeIcon icon={faStar}  />    </i> 
               <div className='h-1.5 w-14 mt-2 line bg-white'></div>


        </div>
        <h3 className='text-center'>Graphic Artist - Web Designer - Illustrator</h3>
        </div>
        </div>
    </section>


  </>
    }

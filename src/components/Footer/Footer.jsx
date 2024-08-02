import React from 'react'
import "./Footer.css";
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons/faFortAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return <>
    
<footer className="text-white text-center pt-5">
      <div className="container py-5">
        <div className="row md:flex justify-center items-center ">
          <div className=" m-8">
            <h3>LOCATION</h3>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className=" m-8">
            <h3>AROUND THE WEB</h3>

            <div className="social-icons flex justify-center items-center">
            <i><FontAwesomeIcon icon={faFacebook}  />    </i> 
            <i><FontAwesomeIcon icon={faGithub}  />    </i>   
            <i><FontAwesomeIcon icon={faLinkedin} /></i> 
   
     
                    
            </div>
          </div>

          <div className=" m-8">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center py-3">
        <p className="m-0">Copyright © Your Website 2021</p>
      </div>
    </footer>
 

</>
		
  
}

import React from 'react';
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  // faFacebook,
  // faTiktok,
  faInstagram
  
} from "@fortawesome/free-brands-svg-icons";
function contact() {
  return (
    <div className='dorik'> 
       {/* <div>
          <h3>Get in Touch</h3>
       </div> */}
       <div>
        
       <a href="https://t.me/ds_spx" target='_blank' rel="noopener noreferrer"
        className="telegram social">
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
      {/* <a href="https://www.facebook.com/profile.php?id=61550616536115&mibextid=ZbWKwL" target='_blank' rel="noopener noreferrer"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a> */}
       
      <a href="https://www.instagram.com/ds_spx?igsh=aHY5dGEzMWQxdHlw" target='_blank' rel="noopener noreferrer"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>

       </div>
      
       
  </div>
  )
}
export default contact
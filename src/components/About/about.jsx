import React from 'react';
import "./about.css";
import DagiPic from "../../assets/dagi.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

function about() {
  return (
    <div className='about_container'>
      <div className='profile'>
        <h5> About me </h5>
        <img src={DagiPic} alt="mame's pic"/>
        <h5> Graphics Designer </h5>
        <p> 

        I'm Dagim Sisay a seasoned graphics designer with a year of professional experience.
         My expertise spans creating visually compelling designs, logos, and branding materials. I am dedicated to understanding client needs and translating them into exceptional visual solutions
        . Let me bring your vision to life with creativity and precision.</p>
    </div>
      <div className='about_cards'>
          <article className='about_card'>
             <FaAward className='about_icon'/>
             <h5> Experience </h5>
             <small> 1+ year Experience </small>
          </article>

          <article className='about_card'>
             <VscFolderLibrary className='about_icon'/>
             <h5> Projects </h5>
             <small> Worked for different clients </small>
          </article>

          <article className='about_card'>
             <FiUsers className='about_icon'/>
             <h5> Work </h5>
             <small> Quality over Quantity </small>
          </article>

      </div>
    </div>
      
      
      
    
  )
}

export default about
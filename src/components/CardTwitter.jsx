
import { useState ,useContext, useEffect, useRef } from "react";
import React from 'react'
import facebookIcon from '../images/icon-facebook.svg';
import instagramIcon from '../images/icon-instagram.svg';
import twitterIcon from '../images/icon-twitter.svg';
import youtubeIcon from '../images/icon-youtube.svg';
import up from '../images/icon-up.svg';
import down from '../images/icon-down.svg';
import Switch from "./Switch";
import Header from "./Header";

const CardTwitter = ({className}) => {

   
    const [isHovered, setIsHovered] = useState(false);
     // On change l’état de isHovered à true
    
 const onMouseEnter = () => setIsHovered(true);
 // On change l’état de isHovered à false
 const onMouseLeave = () => setIsHovered(false);

    
 className  =+ (isHovered) ? "Yes" : "No" ;
  return (

  
   <div className="cardContainer">
     
    <div   className={className}
   
   onMouseEnter={onMouseEnter}
   
   onMouseLeave={onMouseLeave}    > <div className='email'><img src={twitterIcon} alt="Logo" /> <p>@nathanf</p>   </div> <div className='box'>

    <h1 id="numberFollower" className='numberFollower'>1044</h1> 
        </div> 
        <p className='titleFollower'>FOLLOWERS</p><p className='greenText'><img src={up} alt="up" /> 99 Today</p>
       
        </div>
        </div>
  )
  
 
}



export default CardTwitter;

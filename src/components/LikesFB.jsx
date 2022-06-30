
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

const LikesFB = ({className}) => {

   
    const [isHovered, setIsHovered] = useState(false);
     // On change l’état de isHovered à true
    
 const onMouseEnter = () => setIsHovered(true);
 // On change l’état de isHovered à false
 const onMouseLeave = () => setIsHovered(false);

    
 className  =+ (isHovered) ? "Hover" : "NoHover" ;
  return (

  
   <div className="overview">
     
    <div   className={className}
   
   onMouseEnter={onMouseEnter}
   
   onMouseLeave={onMouseLeave}    > <div className="card-flex">

    <div className="card__title"><p className="numberPage">Likes</p>   </div><img src={facebookIcon} alt="Logo" /> </div> <div className="card-flex">
    <div id="compteurID" className="compteur">52</div> <div className="pourcentage"><p className='redtext'><img src={down} alt="up" /> 2%</p></div>


   </div>
        </div> 
       
        </div> 
        

        
        
  )
  
 
}



export default LikesFB;

import Cards from "./Cards";

import Switch from "./Switch";
import {useEffect, useRef} from 'react';
import Header from "./Header";
import CardTwitter from "./CardTwitter";
import CardInstagram from "./CardInstagram";
import CardYoutube from "./CardYoutube";
import SecondHeader from "./SecondHeader";
import PageViews from "./PageViews";
import LikesFB from "./LikesFB";
import LikesInsta from "./LikesInsta";
import ProfileViews from "./ProfileViews";
import Retweets from "./Retweets";
import LikesTwitter from "./LikesTwitter";
import LikesYoutube from "./LikesYoutube";
import TotalViewsYoutube from "./TotalViewsYoutube";

function App(item,index) {
  const ref = useRef(null);
  

  
  return (
    <div className="App">
    
      <div id="body">  
      <div className="container">
      <Switch/>
  <Header/>
  
       
    

 
    <div className="cards"> 
    
    <Cards/>
    <CardTwitter/>
    <CardInstagram/>
    <CardYoutube/>
    
    </div>
    <SecondHeader/>
    <div className="overviewCards">
      <PageViews />
      <LikesFB/>
      <LikesInsta/>
      <ProfileViews/>
      <Retweets/>
      <LikesTwitter/>
      <LikesYoutube/>
      <TotalViewsYoutube/>
    </div>
    </div>
    
    
    </div>
    
    </div>
    
  );
}

export default App;

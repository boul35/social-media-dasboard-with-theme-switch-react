
import { useState ,useContext, useEffect, useRef } from "react";


const Switch = ( {className}) => {
    const [checked, setChecked] = useState(false);
    
    const toggleThemeChange = () => {;
        if (checked === false) {
          setChecked(true);
            document.getElementsByTagName("HTML")[0].setAttribute("class", "test") 
          
            console.log("UNCHECKED")
          
        } else if (checked == true) {
          setChecked(false);
        console.log("CHECKED")
       
        document.getElementsByTagName("HTML")[0].setAttribute("class", "test2")//vert titre-secondaire
        
        
        }
      }
    

return(

  <div className="toggle">
    <label className="switch"  >
        <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => toggleThemeChange()}
      />
     
  
    <span className="slider rounded" name="accept"  />
    <p className="darkMode">Dark Mode</p>
    

</label>
</div>
)


} 
export default Switch





  
    
  


    







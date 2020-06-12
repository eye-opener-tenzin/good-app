import React from 'react';
import Chapter from './chapter';
import WhiteBuddha from '../image/white-buddha.png';
import BlueBuddha from '../image/blue-buddha.png';
import YellowBuddha from '../image/yellow-buddha.png';
import RedBuddha from '../image/red-buddha.png';
import GreenBuddha from '../image/green-buddha.png';
import '../App.css';
         
     
 
 class AppLogo extends React.Component {
    render () {
        return (
            
<div>
    <div>
        
         
         <div className="second-circle"></div>
         <div className="third-circle"></div>
         <div className="first-rect"></div>
         <div className="second-rect"></div>
         <div className="third-rect"></div>
         <div className="a-rect"></div>
         <div className="forth-rect"></div>
         <div className="b-rect"></div>
         <div className="fifth-rect"></div>
         <div className="sixth-rect"></div>
         
          
                <img className="white-buddha" src={WhiteBuddha} height="200" width="auto" alt={WhiteBuddha}></img> 
                < img className="blue-buddha" src={BlueBuddha} height="200" width="auto" alt={BlueBuddha} />
                <img className="yellow-buddha" src={YellowBuddha} height="200" width="auto" alt={YellowBuddha} />
                <img className="red-buddha" src={RedBuddha} height="200" width="auto" alt={RedBuddha} />
                <img className="green-buddha" src={GreenBuddha} height="200" width="auto" alt={GreenBuddha} />
             </div>
             <div className="small-circle"></div>
    
   </div>     
  
   
        )
    }

}
export default AppLogo


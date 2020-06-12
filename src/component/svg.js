import React from "react";
import WhiteBuddha from "../image/buddhas.jpg";
import '../App.css';



class Svg extends React.Component{
    render() {
        return(
     
        
    <svg height="600" width="600">
   


        <circle cx="250" cy="250" fill="none" r="233" stroke="white" strokeWidth="5" ></circle>
        <rect fill="white" opacity="1" height="200" stroke="#00000" id="rect" width="200" x="150" y="150" />
        
        {/* <path d="M85 85 L150 150 H350 L415 85 Q250 -50,85 85, 415 85" id="west" fill="red" stroke="#0000"/>
        <path d="M415 85 L350 150 V350 L415 415 Q550 250, 415 85, 415 415" id="north" fill="green" stroke="#0000"/>
        <path d="M415 415 L350 350 H150 L85 415 Q250 550, 415 415, 415 85" id="east" fill="blue" stroke="#00000"/>
        <path d="M85 415 L150 350 V150 L85 85 Q-50 250, 85 415, 85 85" id="south" fill="gold" stroke="#00000"  />  */}
    </svg>   

        )
        }
}
export default Svg


    //     
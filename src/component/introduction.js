import React from 'react';
import createBodyContent from "../templater/createBodyContent"

class Introduction extends React.Component {
    bodyObjs = [
        {
          subtitle: "Buddha Family",
          image_url: "image",
          paragraphs: ["paragraph 1", {topic: "Buddh is awesome", paragraphs: ["p1", "p2"]}]  
        },
        {
          subtitle:  "Karma Fmaily", 
          image_url: "image",
          paragraphs: [""]  
        },
        {
          subtitle: "Ratna Family",
          image_url: "image",
          paragraphs: [""]  
        },
        {
          subtitle: "Padma Family",  
          image_url: "image",
          paragraphs: [""]  
        },
        {
          subtitle: "Vajra Family",  
          image_url: "image",
          paragraphs: [""]  
        }
      ]
    render (){
        return(
            <div>
            <h2 className="intro">Introduction</h2>
            <br />
            <div> { createBodyContent(this.bodyObjs)}</div>
         </div>
        )
    }
}
export default Introduction;
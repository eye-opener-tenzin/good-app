import React from 'react';
import createBodyContent from "../templater/createBodyContent"


class Extrablessing extends React.Component {

  bodyObjs = [
    {
      subtitle: "subtitle",
      image_url: "image",
      paragraphs: [""]  
    },
    // {
    // subtitle: "subtitle",
    // image_url: "image",
    // paragraphs: [""]  
    // },
    // subtitle: "subtitle",
    // image_url: "image",
    // paragraphs: [""]  
    // },
    // subtitle: "subtitle",
    // image_url: "image",
    // paragraphs: [""]  
    // },
    // subtitle: "subtitle",
    // image_url: "image",
    // paragraphs: [""]  
    // },
  ]


    render (){
        return(
            <div>
            <h2>Extra-Blessing</h2>
            <div> {createBodyContent(this.bodyObjs)}</div>
         </div>
        )
    }
}
export default Extrablessing
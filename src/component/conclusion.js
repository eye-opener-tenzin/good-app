import React from 'react';
import createBodyContent from "../templater/createBodyContent"


class Conclusion extends React.Component {
    bodyObjs = [
        {
          subtitle: "subtitle",
          image_url: "image",
          paragraphs: [""]  
        }
      ]
    render (){
        return(
            <div>
            <h2>Conclusion</h2>
            <div> { createBodyContent(this.bodyObjs)}</div>
         </div>
  
        )
    }
}
export default Conclusion;
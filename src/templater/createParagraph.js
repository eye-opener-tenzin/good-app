import React from "react"

export default function createParagraphs(paragraphsArr) {

    let paragraphs = [];
    paragraphsArr.forEach((element, index, arr)=>{
      if      (typeof element === "string") { paragraphs.push(<div><p className="paragraph">{element}</p></div>);}
      else if (typeof element === "object") { paragraphs.push(<div><h4 className="topic">{element.topic}</h4><p>
        {createParagraphs(element.paragraphs)}</p></div>); }
      else console.error(`Element is not string or obj ... :${element}`)
    })
    return paragraphs;
}


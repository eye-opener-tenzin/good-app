import React from "react"

import createBodyContent from "./createBodyContent";
export default function createChapterTable(obj) {
    let views = [];
    obj.forEach((obj, index, array) => {
  
      views.push(
            <div>
              <h2 className="part">Part {index+1}</h2>
              <h2 className="chapter">{obj.title}</h2>
              <img className="title_image"alt={obj.title_image_alt} src={ obj.title_image_url }></img>
              <div>{ createBodyContent(obj.bodyContent) }</div>
            </div>
      )
    });
    return views;
  }
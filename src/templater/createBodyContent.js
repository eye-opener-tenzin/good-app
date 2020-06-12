import React from "react";
import createParagraphs from "./createParagraph";

export default function createBodyContent(bodyContentArr) {

    let bodyContent = [];

    bodyContentArr.forEach((element, index, arr)=>{
        bodyContent.push(
          <div>
            <h3 className="subtitle">{element.subtitle}</h3>
            <img className="image"alt={element.image_alt} src={element.image_url}></img>
            <div>{ createParagraphs(element.paragraphs) }</div>
          </div>
        );
    });
    return bodyContent;
}
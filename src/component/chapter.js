import React from 'react';
import createChapterTable from "../templater/createChapterTable";


class Chapter extends React.Component {

    chapterObjs = [
        {
          title: "Spacious Awareness",
          title_image_url: "",
          bodyContent:[
              {
                subtitle: "subtitle",
                image_url: "image",
                paragraphs: ["paragraph1", "paragraph2"]  
              }      
          ]
        },
        {
          title: "Thunderbolt",
          title_image_url: "",
          bodyContent:[
              {
                subtitle: "subtitle",
                image_url: "image",
                paragraphs: [""]
              }      
          ]
        },
        {
          title: "Jewel",
          title_image_url: "",
          bodyContent:[
              {
                subtitle: "subtitle",
                image_url: "image",
                paragraphs: [""]
              }      
          ]
        },
        {
          title: "Lotus",
          title_image_url: "",
          bodyContent:[
              {
                subtitle: "subtitle",
                image_url: "image",
                paragraphs: [""]
              }      
          ]
        },
        {
          title: "Action",
          title_image_url: "",
          bodyContent:[
              {
                subtitle: "subtitle",
                image_url: "image",
                paragraphs: [""]
              }      
          ]
        }
      ];
      render() {
        return (
            <div>    
              <h2>Chapter</h2>                    
                { createChapterTable(this.chapterObjs) }
            </div>
        );
      }
    };
    
    export default Chapter;
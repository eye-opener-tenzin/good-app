import React from 'react';
import createBodyContent from '../templater/createBodyContent';
import createContacts from "../templater/createContacts";
import createOptions from "../templater/createOptions";
// import Contact from "./contact";

class About extends React.Component {

    purposeObj = /**bodyConent */[
        {
          subtitle: "subtitle",
          image_url: "image",
          paragraphs: [""]
        }      
    ]

    contacts = [{
        image_url: "adf",
        name: "name",
        phone: "3123123123",
        email: "@gmal.com",
        mailingAddress: "123 nowhere st"
    }]

    options = [
        {
            value: "other",
            effect: ""
        },
        {
            value: "content",
            effect: ""
        },
        {
            value: "design",
            effect: ""
        },
        {
            value: "ideas",
            effect: ""
        }
    ]

    render (){
        // contact info
            // Expectations of reply time.
            // webmaster-contact
            // organizer-contact
            // ???? contact
    //orginasation information
            // purpose
            // team ... pics
            // 
    //feedback
            // other ... manual data entry
            // selectable options & values
                // options            // values 
                /**
                 * ideas
                 * 
                 * 
                 * 
                 */
        return(
            <div>
                <h2>About</h2>
                <div>
                    <div>
                        <h3>Contact Info</h3>
                        <div>
                            <p>Expectations of reply time.</p>
                            <p>Were looking forwared to hear from you</p>
                        </div>
                        {createContacts(this.contacts)}
                    </div>
                    <div>
                        <h3>Organization Info</h3>
                        <div>
                            <h4>Purpose</h4>
                            { createBodyContent(this.purposeObj) }
                        </div>
                    </div>
                    <div>
                        <h3>FeedBack</h3>
                        <p>We love change. Tell us what needs to be improved.</p>
                        <select>
                            { createOptions(this.options) }
                        </select>
                    </div>
                </div>
            </div>
    
        )
    }
}
export default About
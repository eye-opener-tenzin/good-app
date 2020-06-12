import React from "react"
import Contact from "../component/contact";

export default function createContacts(contactsArr) {
    let contacts = [];

    contactsArr.forEach((element)=>{
        contacts.push(<Contact {...element}/>)
    })
    return contacts;
}
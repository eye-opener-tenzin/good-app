import React from "react";
import { runInThisContext } from "vm";

export default class Contact extends React.Component{

    render() {
        return (
            <div>
                <ul>
                    <li><img src={this.props.image_url} alt={this.props.image_alt}/></li>
                    <li>{this.props.name}</li> 
                    <li>{this.props.phone}</li>
                    <li>{this.props.email}</li>
                    <li>{this.props.mailingAddress}</li>
                </ul>
            </div>
        );
    }

}
import React from 'react';
import '../App.css'



class Navlink extends React.Component {

    render (){
        return(
            
        <div className="collapse navbar-collapse"id="HAD"> 
        <nav className="navbar navbar-expend-md"></nav>
       
            <ul className ="navbar-nav ml-auto">
                <li className="nav-item active"><a className="nav-link" href="home">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="introduction">Introduction</a></li>
                <li className="nav-item"><a className="nav-link" href="chapters">Chapters</a></li>
                <li className="nav-item"><a className="nav-link" href="conclusion">Conclusion</a></li>
                <li className="nav-item"><a className="nav-link" href="extrablessing">ExtraBlessing</a></li>
                <li className="nav-item"><a className="nav-link" href="about">About</a></li>
                <li className="nav-item"><a className="nav-link" href="donate">Donate</a></li>
            </ul>
        
        </div>

        )
    }
}
export default Navlink
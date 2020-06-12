import React from 'react';
import NavLink from './navlink';
import logo from '../yogaLogo.svg';
import AppTitle from './appTitle';
import AppTitleDescription from './appTitleDescription';
import image from '../image/five-family-buddha.png'
import '../App.css';


class Navbar extends React.Component {
    render (){
        return(
            <div className="image">
            {/* <img src={image} height='auto' width="100%" alt={image}/> */}
            <nav className="navbar my-nav navbar-toggleable-md stick-top">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
                    <div className="container">
                    <img className="logo" src={logo} height="50" width="60" alt="logo"></img>
                    <a className="navbar-brand"href="/"><h2>Healing After Death</h2></a>
                    
                            
                        
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


                    </div>
            </nav>
        </div>
        )
    }
}
export default Navbar
import React from 'react';
import logo from './yogaLogo.svg';
import MainBody from './component/mainBody';
import Main from './component/main';
import Navbar from './component/navbar';
import NavLink from './component/navlink';
import AppLogo from "./component/appLogo";
import AppTitle from './component/appTitle';
import image from './image/five-family-buddha.png'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { content } from 'react-mdl';
import './App.css';
import AppTitleDescription from './component/appTitleDescription';
import { Layout } from './component/layout';


class App extends React.Component {
  render() {
    return (
    <React.Fragment>
     
      <Navbar />
      <NavLink />
      <AppLogo />
    
      <BrowserRouter>
          <div className="App">
          <header className="App-Header">
            
           
                </header>
                
             </div>  
          
           
              
                       
            </BrowserRouter>
            <content>
                <MainBody /> 
            </content>
       
           
     
      
  
      </React.Fragment>
    );
  }
}

export default App;

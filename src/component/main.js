import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./navbar";
import ScrollSpy from "./scrollspy";
import MainBody from "./mainBody";
import Pagination from "./pagination";
import Footer from "./footer";
import Navlink from './navlink';


class Main extends React.Component {
    render (){
        return(
            <div>
            <BrowserRouter>            
            <ScrollSpy />
            <Pagination />
            <MainBody />
            <Pagination />
            <Footer />
            </BrowserRouter>
           </div>

        )
    }
}
export default Main
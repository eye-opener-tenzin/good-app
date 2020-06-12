import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Chapters from './chapter';
import Conclusion from './conclusion';
import ExtraBlessing from './extrablessing';
import Donate from './donate'
import Introduction from './introduction';
import AppLogo from './appLogo';
import AppTitle from './appTitle';
import Navbar from './navbar';
import { App } from '../App'


class MainBody extends React.Component {
    render (){
        return(
            <BrowserRouter>
              
             <Switch>
                    <Route exact path='/appLogo' component={AppLogo} />
                    <Route exact path='/appTitle' component={AppTitle}/>
                    <Route exact path='./navbar' component={Navbar} />
                    <Route  path='/home' component={Home} />
                    <Route  path='/introduction'component={Introduction} />
                    <Route  path='/chapters' component={Chapters}/>
                    <Route  path='/conclusion' component={Conclusion} />
                    <Route  path='/extrablessing' component={ExtraBlessing} />
                    <Route  path='/about'component={About} />
                    <Route  path='/donate' component={Donate} />
             </Switch>
            </BrowserRouter>
        )
    }
}
export default MainBody
import React from 'react';
import { Switch,Route } from 'react-router-dom';
import landingpage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import resume from './resume';

const Main = () =>(
    <Switch>
    <Route exact path="/" component={landingpage}/>
    <Route exact path="/aboutme" component={AboutMe}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/projects" component={Projects}/>
    <Route exact path="/resume" component={resume}/>

    </Switch>
)

export default Main;
import React from 'react';
import { Header, Navigation, Drawer, Content, Layout } from 'react-mdl';
import Main from './components/main'
import './App.css';
import {Link} from 'react-router-dom';

function App() {



    return (
        <div className="App">
            <div>
                <Layout style={{ backgroundColor: "white" }}>
                    <Header className="header-color" title="OnurAltuntasDev">
                        <Navigation >
                            <a href="/">Home</a>
                            <a href="/aboutme">About Me</a>
                            <a href="/projects">Projects</a>
                            <a href="/contact">Contact</a>
                            <a href="/resume">Resume</a>
                        </Navigation>
                    </Header>
                    <Drawer className="drawer-color" style={{ backgroundColor:"white",opacity:".8"}}>
                        <Navigation>
                        <a href="/aboutme">About Me</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                        <a href="/resume">Resume</a>
                        </Navigation>
                    </Drawer>
                    <Main />
                    <Content />
                </Layout>
            </div>
        </div>
    );
}

export default App;

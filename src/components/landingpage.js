import React, { Component } from 'react';
import { Header, Navigation, Drawer, Content, Layout, Grid, Cell } from 'react-mdl';
import '../App.css';

class landingpage extends Component {
    render() {
        return (
            <div className="landing-main">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className="avatar-img"
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Complicated Web and Mobile Developer</h1>
                            <hr></hr>
                            <p>HTML/CSS | JavaScript | React | NodeJS | C# | Asp.net | Firebase </p>
                            
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" area-hidden="true"></i>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" area-hidden="true"></i>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-twitter-square" area-hidden="true"></i>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" area-hidden="true"></i>
                                </a>
                            
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default landingpage;
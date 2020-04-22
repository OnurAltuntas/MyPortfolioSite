import React, { Component } from 'react';
import { Header, Navigation, Drawer, Content, Layout, Grid, Cell ,Footer,FooterDropDownSection,FooterLinkList,FooterSection} from 'react-mdl';
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
                <hr></hr>
                <div className="footer">
                <Footer className="footer" size="mega">
        <FooterSection type="middle">
            <FooterDropDownSection title="Features">
                <FooterLinkList>
                    <a href="#">About</a>
                    <a href="#">Terms</a>
                    <a href="#">Partners</a>
                    <a href="#">Updates</a>
                </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Details">
                <FooterLinkList>
                    <a href="#">Specs</a>
                    <a href="#">Tools</a>
                    <a href="#">Resources</a>
                </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="Technology">
                <FooterLinkList>
                    <a href="#">How it works</a>
                    <a href="#">Patterns</a>
                    <a href="#">Usage</a>
                    <a href="#">Products</a>
                    <a href="#">Contracts</a>
                </FooterLinkList>
            </FooterDropDownSection>
            <FooterDropDownSection title="FAQ">
                <FooterLinkList>
                    <a href="#">Questions</a>
                    <a href="#">Answers</a>
                    <a href="#">Contact Us</a>
                </FooterLinkList>
            </FooterDropDownSection>
        </FooterSection>
        <FooterSection type="bottom" logo="Title">
            <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
            </FooterLinkList>
        </FooterSection>
    </Footer>
                </div>
            </div>
        )
    }
}
export default landingpage;
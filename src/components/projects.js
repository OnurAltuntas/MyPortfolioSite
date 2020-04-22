import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">

                    <div className="p-grids">
                        <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                            <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                            <CardText>
                                My first React Project
                </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                        </Card>

                    </div>

                    <div className="p-grids">
                        <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                            <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                            <CardText>
                                My first React Project
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                        </Card>

                    </div>

                    <div className="p-grids">

                        <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                            <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                            <CardText>
                                My first React Project
                    </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                        </Card>
                    </div>

                </div>
                //React Projects
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">

                <div className="p-grids">
                <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                        <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/367_Vuejs-512.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                        <CardText>
                            My first React Project
            </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                    </Card>
                </div>

                <div className="p-grids">
                <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                        <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/367_Vuejs-512.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                        <CardText>
                            My first React Project
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                    </Card>
                </div>

                <div className="p-grids">
                <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/367_Vuejs-512.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                <CardText>
                    My first React Project
        </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
            </Card>
                </div>


                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                        <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/504/ASP.Net-512.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                        <CardText>
                            My first React Project
            </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                        <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/504/ASP.Net-512.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                        <CardText>
                            My first React Project
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                        <CardTitle expand style={{ color: '#fff', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/504/ASP.Net-512.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                        <CardText>
                            My first React Project
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                    </Card>

                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                        <CardTitle expand style={{ color: '#fff', background: 'url(https://www.shareicon.net/data/2016/07/08/117547_developer_512x512.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                        <CardText>
                            My first React Project
            </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                        <CardTitle expand style={{ color: '#fff', background: 'url(https://www.shareicon.net/data/2016/07/08/117547_developer_512x512.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                        <CardText>
                            My first React Project
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ width: '320px', height: '320px', margin: 'auto' }}>
                        <CardTitle expand style={{ color: '#fff', background: 'url(https://www.shareicon.net/data/2016/07/08/117547_developer_512x512.png) center/cover' }}>OnurAltuntasDev</CardTitle>
                        <CardText>
                            My first React Project
                </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                    </Card>

                </div>
            )
        }
    }


    render() {
        return (
            <div className="projects-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>Asp.net</Tab>
                    <Tab>Android-Firebase</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content" > {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>

            </div>
        )
    }
}
export default projects;
import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

export default class contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Onur Altuntas</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: '250px' }} />

                        <p style={{ width: "75%", margin: 'auto', paddingTop: "1em" }}>Voluptate reprehenderit voluptate magna est in. Excepteur irure elit pariatur minim et consequat quis est ipsum aliqua. Labore consectetur eu veniam magna ad irure nisi tempor laborum voluptate. Qui aliquip mollit veniam culpa occaecat duis tempor ullamco magna reprehenderit exercitation laboris. Mollit do exercitation sit officia duis fugiat aute anim.</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent className="list-itemcontent" >
                                        <i style={{ fontSize: "50px", paddingRight: "5rem" }} className="fa fa-phone-square" aria-hidden="true" />
                                (507)5985053
                                </ListItemContent>

                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-itemcontent" >
                                        <i style={{ fontSize: "50px", paddingRight: "5rem" }} className="fa fa-fax" aria-hidden="true" />
                        (507)5985053
                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent className="list-itemcontent" >
                                        <i style={{ fontSize: "50px", paddingRight: "5rem" }} className="fa fa-envelope" aria-hidden="true" />
                        onuraltuntas50@gmail.com
                        </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

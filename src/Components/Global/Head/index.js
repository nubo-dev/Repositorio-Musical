import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// @material
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Typography } from '@material-ui/core'

// Style
import '../Static/header.css'

class Head extends Component {
    render() {
        const { items, title } = this.props
        return (
            <div>
                <AppBar position="static" elevation={1}>
                    <Toolbar className="Head-ToolBar">
                        <Grid item xs={3}>
                            <Typography variant="title" color="inherit">
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs={9} className="Grid-Lista">
                            <ul className="ul-head">
                                {
                                    items.map((item, key) => (
                                        <li key={key} className='li-head'>
                                            <Link to={item.url}>{item.title}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Head;

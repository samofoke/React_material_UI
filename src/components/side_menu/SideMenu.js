import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core';

//we going to use withStyles and makeStyles in material ui
// so I can convert the jss into the CSS.

const style = {
    sideMenuStyles: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '300px',
        height: '100%',
        backgroundColor: 'slategray'
    }
}

const SideMenu = (props) => {

    const { classes } = props;

    //we return the class side menu 
    //we define the CSS using JSS 
    //to be able to be to use css using material ui
    return (
        <div className={classes.sideMenuStyles}>

        </div>
    )
}

export default withStyles(style)(SideMenu);
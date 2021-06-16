import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core';

//we going to use withStyles and makeStyles in material ui
// so I can convert the jss into the CSS.

const useStyles = makeStyles({
    sideMenuStyles: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '300px',
        height: '100%',
        backgroundColor: 'slategray'
    }
})

function SideMenu() {

    const mainClassStyle = useStyles();
    console.log(mainClassStyle);

    return (
        <div className={mainClassStyle.sideMenuStyles}>

        </div>
    )
}

export default SideMenu;
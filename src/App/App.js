import React from 'react';
import SideMenu from '../components/side_menu/SideMenu';
import HeaderMenu from '../components/Header/header';
import { makeStyles } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '300px',
    width: '100%'
  }
})

function App() {

  const  classes = useStyles();

  return (
    <>
    <SideMenu />
    <div className={classes.appMain}>
    <HeaderMenu />
    </div>
    </>
  );
}

export default App;

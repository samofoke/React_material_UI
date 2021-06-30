import React from 'react';
import SideMenu from '../components/side_menu/SideMenu';
import HeaderMenu from '../components/Header/header';
import EnhancedTable from '../components/sample/Table';
import { makeStyles } from '@material-ui/core';
import './App.css';
import CustomButtons from '../components/sample/custom_buttons/CustomButtons';

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
    <EnhancedTable />
    <CustomButtons/>
    </div>
    </>
  );
}

export default App;

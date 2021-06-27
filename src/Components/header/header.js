import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appButton:{
    margin: "0px 10px 0px 10px" ,
    [theme.breakpoints.down('xs')]: {
      display:'none',
      
    },
    
    
  },
  flexBox:{
    display:'flex',
    justifyContent: 'flex-end',
    
  },
  flexItem:{

  }

}));

export default function Header (){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary" className={classes.head}>
        
          <Toolbar className={classes.flexBox} >
              <Link to='/about'>
                  <Button color={"#000"} className={classes.appButton} >
                      About
                  </Button>
              </Link>
              <Link to='/dashboard'>
                  <Button color={"#000"} className={classes.appButton}>
                      Contact
                  </Button>
              </Link>
              <Link to='/login'>
                  <Button color={"#000"} className={classes.appButton}>
                      Log In
                  </Button>
              </Link>
              <Link to='/signup'>
                  <Button variant="contained" color="primary" className={classes.appButton}>
                      Sign Up
                  </Button>
              </Link>
          </Toolbar>
        
      </AppBar>
    </div>
  );
}
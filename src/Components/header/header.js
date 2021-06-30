import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import PCMBlack from '../../Resources/Images/PCM Black.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appButton:{
    display: 'inline-block',
    margin: "0px 10px 0px 10px" ,
    [theme.breakpoints.down('xs')]: {
      display:'none',
      
    },
  },
  flexBox:{
    display:'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      
    },
    
  },
  flexItem:{

  },
  logoImage:{
    width: '60px',

  }

}));

export default function Header (){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="secondary" className={classes.head}>

          <Toolbar className={classes.flexBox} >

            <div>
              <Link to="/">
                <img src={PCMBlack} className={classes.logoImage}/>
              </Link>
            </div>

            <div>
              <Link to='/about'>
                  <Button color={"#000"} className={classes.appButton} >
                      About
                  </Button>
              </Link>
              <Link to='/contact'>
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
            </div>
              
          </Toolbar>
        
      </AppBar>
    </div>
  );
}
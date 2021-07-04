import React, {useRouter} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import PCMBlack from '../../Resources/Images/PCM Black.png'
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from '@material-ui/core/IconButton';
import {AuthContext} from '../../Provider/context';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmailIcon from '@material-ui/icons/Email';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';





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
      justifyContent: 'space-between',
      
    },
    
  },
  navButton:{
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      
    },
  },
  flexItem:{

  },
  logoImage:{
    width: '60px',

  },
  profile:{
    width: '50%',
    display:'flex',
    justifyContent: 'left',
  },
  profileName:{
    width: '80%',
    display:'flex',
    justifyContent: 'left',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'end',
      
    },
  },
  profileBox:{
    textAlign: 'center',
  },
  closeBox:{
    textAlign: 'right'
  },

  divider:{
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },

  profileText:{
    fontSize: '15px',
    margin: '0px 20px 0px 20px',
    [theme.breakpoints.down('xs')]: {
      margin: '0px 0px -10px 0px'
    },
  },
  profileTitle:{
   
    margin: '0px 20px 0px 20px',
    [theme.breakpoints.down('xs')]: {
      margin: '0px 0px 0px 0px'
    },
  },

  drawer:{
    width: '100%',
  },
  drawerBox:{
    width: '100px',
  },


}));

export default function Header (){
  const classes = useStyles();
  const [log, setLog] = React.useState(false)
  const ctx = React.useContext(AuthContext);
  
  const [anchor, setAnchor] = React.useState(false);

  const toggleDrawer = () => {
    setAnchor(!anchor);
  };
  
  React.useEffect(() => {
    if (ctx.loggedIn){
      setLog(true)
    }else{
      setLog(false)
    }
  },)
  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem button >
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={"SAMPLE"} />
          </ListItem>
      </List>
      <Divider />
    </div>
  );



  return (
    <div className={classes.root}  >
      <AppBar position="fixed" color='secondary' className={classes.head}  >

          <Toolbar className={classes.flexBox}  style={{display: (log && 'none') }} >

            <div  >
              <a href="/">
                <img src={PCMBlack} className={classes.logoImage}/>
              </a>
            </div>

            <div   >
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
                  <Button color={"#000"} className={classes.appButton} >
                      Log In
                  </Button>
              </Link>
              <Link to='/signup'>
                  <Button variant="contained" color="primary" className={classes.appButton}>
                      Sign Up
                  </Button>
              </Link>
                <IconButton className={classes.navButton}>
                    <DehazeIcon style={{fontSize:'40px'}} />
                </IconButton>
            </div>
                 
          </Toolbar>

          <Toolbar className={classes.flexBox}  style={{display: (!log && 'none') }} >

            <div className={classes.profile} >
              <div className={classes.profileBox} >
                <IconButton onClick={(e)=>{console.log(ctx.user)}} >
                  <Avatar className={classes.profilePicture} src={ctx.user.ProfilePicture}/>
                </IconButton>
              </div>
              <div className={classes.profileName} >
              <Typography variant="body1" className={classes.profileText}  >{ctx.user.firstName} {ctx.user.lastName}</Typography>
              <Typography variant="h3" className={classes.divider} >|</Typography>
              <Typography variant="body1" className={classes.profileTitle}   >DASHBOARD</Typography>
              </div>
             
            </div>

            <div   >
                <IconButton onClick={toggleDrawer}>
                    <DehazeIcon style={{fontSize:'40px'}}  />
                </IconButton>
                <Drawer anchor={'right'} open={anchor} onClose={toggleDrawer} className={classes.drawerBox}>
                  <div
                      role="presentation"
                      onClick={toggleDrawer}
                      onKeyDown={toggleDrawer}
                    >
                    <div className={classes.closeBox} > 
                      <IconButton  >
                          <CloseIcon style={{fontSize:'30px'}} />
                        </IconButton>
                      </div>
                    
                    <div className={classes.profileBox} >
                      <IconButton  >
                        <Avatar className={classes.profilePicture} src={ctx.user.ProfilePicture}/>
                      </IconButton>
                      <Typography variant="h6" style={{margin: '0px 20px 0px 20px'}}  >{ctx.user.firstName} {ctx.user.lastName}</Typography>
                    </div>
                    <List className={classes.drawer}>
                      <Link to='/dashboard'>
                          <ListItem button >
                                <ListItemIcon><DashboardIcon /></ListItemIcon>
                                <ListItemText primary={"DashBoard"} /> 
                          </ListItem>
                      </Link>

                      <Link to='/dashboard'>
                        <ListItem button >
                              <ListItemIcon><DirectionsWalkIcon /></ListItemIcon>
                              <ListItemText primary={"PCM Journey"} /> 
                        </ListItem>
                      </Link>

                      <Link to='/contact'>
                        <ListItem button >
                              <ListItemIcon><EmailIcon /></ListItemIcon>
                              <ListItemText primary={"Need Assistance?"} /> 
                        </ListItem>
                      </Link>

                      <Link to='/'>
                        <ListItem button >
                              <ListItemIcon><SettingsIcon /></ListItemIcon>
                              <ListItemText primary={"Settings"} /> 
                        </ListItem>
                      </Link>

                      <ListItem button onClick={()=> {ctx.setModal({open: true, title: 'Are You Sure You Want To Logout from the PCM Journey ?', function: ctx.logOut}) }} >
                              <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                              <ListItemText primary={"Log Out"} /> 
                      </ListItem>

                       <Divider /> 
                    </List>
                  </div>
              </Drawer>
       
            </div>
                 
          </Toolbar>


        
      </AppBar>
    </div>
  );
}
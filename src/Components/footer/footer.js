import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../Resources/Images/image.jpg';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {ForEmailUsername, ForPassword} from '../../Components/helpsound/loginhelp';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {AuthContext} from '../../Provider/context';

const useStyles = makeStyles((theme) => ({
    main:{
        margin: '300px 0px 0px 0px',
        height: '100vh',
        display: 'flex',
        backgroundImage: `url(${image})` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover' ,
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '200px 0px 0px 0px',
          },
    },
    h2:{
        color: theme.palette.secondary.main
    },

  }));
  

export default function Footer () {
    const classes = useStyles();
    const [form, setForm] = React.useState({email: '', password: ''});
    

    return (
        <div className={classes.main}>
            <div className={classes.firstSection} >
                <Typography variant="h2" className={classes.h2} >LET'S GET PERSONAL</Typography>
            </div>
        </div>
    );
}
import React from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import animation from './style.module.css';
import moment from 'moment';
import PCMGold from '../../Resources/Images/PCMLOGO.png'
// xs: 0,
// sm: 600,
// md: 1040,
// lg: 1280,
// xl: 1920,

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden'
    },
    firstSection:{
        margin: '150px 00px 200px 00px',
        [theme.breakpoints.down('xs')]: {
            margin: '120px 00px 50px 00px',
            
        },     
    },
    secondSection:{
        margin: '20px 0px 120px 0px'
    },
    thirdSection:{
        margin: '20px 0px 190px 0px'
    },

    title: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center"
        
    },
    buttonBox:{
        display: "flex",
        justifyContent:'center',
       
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '50px 20px 20px 20px',
            justifyContent: 'center',
            alignItems: 'center',
          },
        [theme.breakpoints.down('xs')]: {
            
            
          },        
    },
    appButton:{
       width: '30rem',
       height: "6rem",
       margin: '100px 20px 20px 20px',
       [theme.breakpoints.down('sm')]: {
        margin: '5px 0px 20px 0px',
      },
        [theme.breakpoints.down('xs')]: {
            width: '30rem',
            height: "5.5rem",
        },    
    },
    subtitleBox:{
        display: "flex",
        justifyContent:'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
    },
    subtitleItem:{
        width: '47rem',
        textAlign: "start",
        margin: '50px 20px 20px 20px',
        [theme.breakpoints.down('sm')]: {
            width: "90%",
          },
    },
    h1:{
        lineHeight:"16rem", 
        alignSelf:"center", 
        [theme.breakpoints.down('sm')]: {
            lineHeight:"12rem", 
            fontSize: '15rem',
          },
        [theme.breakpoints.down('xs')]: {
            lineHeight:"7.0rem", 
            fontSize: '7.6rem',
        },
    },
    h2Box:{
        margin: '25px auto 50px auto ',
        textAlign: "center",
    },
    h2:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '5rem',
        },
    },
    h4Box:{
        
        color: theme.palette.primary.main,
        width: "80rem",
        margin: '25px auto 50px auto ',
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            width: "90%",
          },
    },
    h4:{
        fontSize: '4.5rem',
        textAlign: 'center'
    },
    h6Box:{
        width: "80rem",
        margin: 'auto',
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            width: "60rem",
          },
        [theme.breakpoints.down('xs')]: {
            width: "90%",
          },
    },
    h5:{
        
        width: "80rem",
        margin: 'auto auto 100px auto ',
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            width: "90%",
          },
    },
    subtitle1:{
        
    },
    video:{
        display: "flex",
        justifyContent:'center',
        margin: '70px 20px 10px 20px',
        [theme.breakpoints.down('sm')]: {
            margin: '70px 0px 10px 0px',
            height:"auto",
          },
    },
    videoFrame:{
        width:"97rem" ,
        height:"47rem",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            height: '200px'
          },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
          
        
    },
    line:{
        width: '0px',
         height: '170px' ,
         border: '1px solid #EC113EB3' ,
         opacity: 1,
         margin: 'auto',
         borderTopLeftRadius: '100%',
         borderTopRightRadius: '100%',
         
    },
    circle:{
        width: '59px',
        height: '58px',
        background: 'transparent linear-gradient(292deg, #EC113E 0%, #F2E2E2 100%) 0% 0% no-repeat padding-box',
        borderRadius: '50%',
        margin: 'auto',

    },
    logoImage:{
        width: '300px',
        margin: '0px auto 10px auto'
    }
    
   




  }));

const moment1 = moment();
const moment2 = moment();
export default function LandingPage () {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <div className={classes.firstSection} >
                <div className={classes.title} >
                    <Typography variant="h1" className={[classes.h1 , animation.animateTitle1].join(' ')} >THE</Typography>
                    <Typography variant="h1" className={[classes.h1 , animation.animateTitle2].join(' ')} >PCM</Typography>
                    <Typography variant="h1" className={[classes.h1 , animation.animateTitle3].join(' ')} >JOURNEY</Typography>
                </div>
                <div className={classes.buttonBox} >
                    <Link to='/signup'>
                        <Button variant="contained" color="primary" className={classes.appButton} >
                            Sign Up
                        </Button>
                    </Link>
                    <Link to='/login'>
                        <Button variant="outlined" color="primary" className={classes.appButton} >
                            LOG In
                        </Button>
                    </Link>
                </div>
            </div>

            <div className={classes.secondSection} >
                <div className={classes.h6Box} >
                    <Typography variant="h6" >"The PCM Journey is for those who wants to go through a training that will give them a significant result in the end. The PCM Journey will give you a change of mindset and a confident spirit."</Typography>
                    <br/>
                    <br/>
                    <br/>
                    <Typography variant="h6" >-Immanuel Abella-</Typography>
                    <Typography variant="h6" >Chief Business Development Officer </Typography>
                </div> 
                <div className={classes.video} >
                     <iframe className={classes.videoFrame}  src="https://www.youtube.com/embed/RxOz7TI1b7s" title="YouTube video player" frameBorder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                </div>     
            </div>   
            <div className={classes.h5} >
                    <img src={PCMGold} className={classes.logoImage} />
                    
                    <Typography variant="h5" >EXPLORE THE PCM JOURNEY</Typography>
                </div> 
            <div className={classes.thirdSection} >
                
                <div className={classes.line} />
                <div className={classes.circle} >
                    <Typography variant="h4" className={classes.h4} color="secondary"  >1</Typography>
                </div>
                <div className={classes.h4Box} >
                    <Typography variant="h4" className={classes.h4} >Decide</Typography>
                </div> 
                <div className={classes.h2Box} >
                    <Typography variant="h2" className={classes.h2} >SUCCESS IS A DECISION</Typography>
                </div> 
                <div className={classes.subtitleBox}>
                    <div className={classes.subtitleItem}>
                    <Typography variant="subtitle1" >You cannot make progress without making decisions. You are only one decision from a totally different life. In the end, we only regret the chances we didn’t take and the decisions we waited to make. Today is {moment1.format('MMMM DD, YYYY')} If you decided to START the 90 Days PCM Journey NOW, on {moment2.add('90','days').format('MMMM DD, YYYY')} , You will finish the journey.</Typography>
                    </div>
                    <div className={classes.subtitleItem}>
                    <Typography variant="subtitle1" >It takes a level of self-love, of dedication and determination to live your greatest life. So, look within. Look at every area of your life and ask yourself these questions: Will I be on the journey? Will I improve my mentality, emotions and decision-making? Anything that is blocking that, anything that is preventing you from living your greatest life, make the tough decision to let it go.</Typography>
                    </div>
                </div>
            </div>
            <div className={classes.thirdSection} >
                
                <div className={classes.line} />
                <div className={classes.circle} >
                    <Typography variant="h4" className={classes.h4} color="secondary" >2</Typography>
                </div>
                <div className={classes.h4Box} >
                    <Typography variant="h4" className={classes.h4} >Learn</Typography>
                </div> 
                <div className={classes.h2Box} >
                    <Typography variant="h2" className={classes.h2}>BE A STUDENT OF SUCCESS</Typography>
                </div> 
                <div className={classes.subtitleBox}>
                    <div className={classes.subtitleItem}>
                    <Typography variant="subtitle1" className={classes.subtitle1}  >Being a student is easy. Learning requires actual work. The more that you read, the more things you will know. The more that you learn, the more places you’ll go. The beautiful thing about learning is that nobody can take it away from you.</Typography>
                    </div>
                    <div className={classes.subtitleItem}>
                    <Typography variant="subtitle1" >No one can become perfect in just one day. Only Practice makes a man perfect. But now the phrase is changed; only perfect practice makes the difference. You must strive for progress and not perfection. Progress happens with more and more practice. You need a lot of practice to master something in this journey.</Typography>
                    </div>
                </div>
            </div>
            <div className={classes.thirdSection} >
                <div className={classes.line} />
                <div className={classes.circle} >
                    <Typography variant="h4" className={classes.h4} color="secondary"  >3</Typography>
                </div>
                <div className={classes.h4Box} >
                    <Typography variant="h4"  className={classes.h4}>SUCCEED</Typography>
                </div> 
                <div className={classes.h2Box} >
                    <Typography variant="h2" className={classes.h2}>UNLOCKING THE SUCCES IN YOU</Typography>
                </div> 
                <div className={classes.subtitleBox}>
                    <div className={classes.subtitleItem}>
                    <Typography variant="subtitle1" >Create a Positive Environment,  Celebrate Your Small Wins and Surround Yourself With Motivated People. There are people who make things happen, there are people who watch things happen, and there are people who wonder what happened. To be successful, you need to be the person who makes things happen.</Typography>
                    </div>
                    <div className={classes.subtitleItem}>
                    <Typography variant="subtitle1" >There are no secrets to success. It is the result of preparation, hard work, and learning from failure. If you really want to do something, you'll find a way. If you don't, you'll find an excuse. In order to succeed,  first, believe that you can  succeed.</Typography>
                    </div>
                </div>
            </div>



        </div>
        
        
    );
}
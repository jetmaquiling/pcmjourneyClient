import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import HelpIcon from '@material-ui/icons/Help';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from 'axios';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import ReplayIcon from '@material-ui/icons/Replay';
import { KeyboardDatePicker } from "@material-ui/pickers";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FileBase64 from 'react-file-base64';
import moment from 'moment';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Prompt } from 'react-router'
import { FormatBoldTwoTone } from '@material-ui/icons';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const useStyles = makeStyles((theme) => ({
    root: {
        width: '480px',
        margin: '100px auto 50px auto ',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            margin: '70px auto 50px auto ',
        },    
    },
    h2Box:{
        margin: '10px auto 50px auto ',
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            margin: '30px auto 30px auto ',
        },    
    },
    h2:{
        [theme.breakpoints.down('xs')]: {
            fontSize:'70px'
        },    
    },

    h6:{
        margin: '40px 0px 20px 0px',
        fontSize: '2.0rem'
    },

    backBox:{
    },
    back:{
        fontSize: '50px',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            fontSize:'30px'
        },    
    },
    username:{
        fontSize: '140px'
    },
    formBox:{
        padding: '0px 40px 0px 40px',
        [theme.breakpoints.down('xs')]: {
            padding: '0px 0px 0px 00px',
        },    
    },
    formItem:{
        alignContent: 'center',
        margin: 'auto auto 20px auto',
        
    },
    formItemButton:{
        margin: '100px auto 20px auto', 
    },
    appButton:{
        height: '55px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
  }));
  
  let new_date1 = moment();
  let new_date2 = moment();
  let new_date3 =moment();
  let new_date4 =moment();

export default function Signup () {
    const classes = useStyles();
    
    const [checked, setChecked] = React.useState(false);
    
    const [form, setForm] = React.useState({FirstName: '', LastName: '',Email: '', Spouse: '',Password: '',PasswordConfirm: '', Username: '',Purpose: '', BirthDate: new_date1 , Contact: "", Ranking: null, PCMSign: '',PersonalSignature: null , Trained: 'true',Programs: '', country: "",  address: '' , city:'', zip: '' , proof:'', dateproof: new_date2, upline1: '', upline2: '' , upline3:'', Sponsor: '',PCMupline: '', Start: new_date3 , End: new_date4 , PersonalSignPreview: null, PCMSignPreview: null,
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const [load, setload] = React.useState(false);
    const [toaster, setToaster] = React.useState({open:false, message: '', status: ''});
    const [success, setSuccess] = React.useState(false);


    React.useEffect(() => {
        let startDate = moment(form.Start);
        setForm({...form, End: startDate.add('90','days')})
      },[form.Start]);

   
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };

    window.onbeforeunload = function() {
        alert("Are You sure to exit? All your data will be erased.")
        //if we return nothing here (just calling return;) then there will be no pop-up question at all
        //return;
    };


    const handleToaster = (message, status) => {

        setToaster({open: true, message: message ,status:status});
      };
    
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return setToaster({open:false, message: '', status: ''});
        }
    
        setToaster({open:false, message: '', status: ''});
      };
    
      
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    

    const SignUp = async (e)  =>  { 
        e.preventDefault()
        let jwt = ""
        if(form.FirstName.length <= 2 || form.LastName.length <= 2){
            return handleToaster("Your Name is Invalid","error");
        }

        if(form.Contact.length <= 9){
            return handleToaster("Your Contact Number is Invalid","error");
        }

        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.Email))){
            return handleToaster("Your Email is Invalid","error");
        }

        if(form.Username.length <= 5 || form.Ranking.length <= 2){
            return handleToaster("Your PHB Account is Invalid","error");
        }

        if (form.Password.length <= 4  || form.Password !== form.PasswordConfirm){
            return handleToaster("Your Password in not the same","error");
        }

        if (!checked){
            return handleToaster("Please Agree to the Terms And Agreements","error");
        }

        setload(true)
        axios
        .post('https://walakajowabackend.herokuapp.com/auth/local/register', {
            firstName: form.FirstName,
            lastName: form.LastName,
            birthDate: form.BirthDate,
            contact: form.Contact,
            email: form.Email,
            spouse: form.Spouse,
            address: `${form.address}, ${form.city}, ${form.zip}, ${form.country}`,
            username: form.Username,
            Why: form.Purpose,
            startJourney: form.Start,
            endJourney: form.End,
            password: form.Password,
        })
        .then(response => {
            jwt = response.data.jwt
            axios
                .post('https://walakajowabackend.herokuapp.com/userconfirmations', {
                firstReferencePurchase : form.proof,
                referencePurchaseDate: form.dateproof,
                presentRanking: form.Ranking,
                PCMUpline: form.PCMupline,
                Sponsor: form.Sponsor,
                ranking: form.Ranking,
                username: form.Username,
                active3Uplines: `${form.upline1}, ${form.upline2}, ${form.upline3}`,
                experiencedNetBuilder: (form.Trained === 'true' ? true : false),
                networkBuilderEvents: form.Programs ,
                users_permissions_user: response.data.user
            }, {
                headers: { Authorization: `Bearer ${jwt}` }

            }).then(res => {
                console.log(res)
                console.log(jwt)
                const formData1 = new FormData()
                formData1.append('files', form.PCMSignature);
                formData1.append('ref','Userconfirmation')
                formData1.append('refId', res.data.id);
                formData1.append('field', 'PCMSignature');
                console.log(formData1,form.PCMSignature.name);
                axios.post('https://walakajowabackend.herokuapp.com/upload/', formData1, {
                    headers: { Authorization: `Bearer ${jwt}` }
                })
    
    
                const formData2 = new FormData()
                formData2.append('files', form.PersonalSignature);
                formData2.append('ref','Userconfirmation')
                formData2.append('refId', res.data.id);
                formData2.append('field', 'PersonalSignature');
                console.log(formData2,form.PersonalSignature.name)
                axios.post('https://walakajowabackend.herokuapp.com/upload/',formData2, {
                    headers: { Authorization: `Bearer ${jwt}` }
                })

                setSuccess(true);
                // setload(false);

            }).catch(error => {
            // Handle error.
            console.log(error);
            setload(false);
            handleToaster("There is a problem with your Application!","warning");
            
            });

            // Handle success.
            // console.log('Well done!',response);
            // console.log('User profile', response.data.user);
            // console.log('User token', response.data.jwt);
            
            
        })
        .catch(error => {
            // Handle error.
            console.log(error);
            setload(false);
            handleToaster("There is a problem with your Application!","warning");
            
        });

       


        
    
    
    }
    const Upload = () => {
        const formData1 = new FormData()
        formData1.append('files', form.PCMSignature);
        formData1.append('ref','Userconfirmation')
        formData1.append('refId', 5);
        formData1.append('field', 'PCMSignature');
        console.log(formData1,form.PCMSignature.name);
        axios.post('http://localhost:1337/upload/', formData1)


        const formData2 = new FormData()
        formData2.append('files', form.PersonalSignature);
        formData2.append('ref','Userconfirmation')
        formData2.append('refId', 5);
        formData2.append('field', 'PersonalSignature');
        console.log(formData2,form.PersonalSignature.name)
        axios.post('http://localhost:1337/upload/',formData2)

    }

    return (
        <div className={classes.root}>
            <Prompt
                // when={shouldBlockNavigation}
                message='You have unsaved changes, are you sure you want to leave?'
                />
            <Snackbar open={toaster.open} autoHideDuration={9000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={toaster.status}>
                {toaster.message}
            </Alert>
            </Snackbar>
            <Dialog
                style={{zIndex: 9999}}
                open={success}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    PHBWORX INTERNATIONAL is processing your application.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>window.location.replace("/")} color="primary" autoFocus>
                    Continue
                </Button>
                </DialogActions>
            </Dialog>
            <Backdrop style={{zIndex: 9998}} className={classes.backdrop} open={load} >
                <CircularProgress color="inherit" />
            </Backdrop>

            <div className={classes.backBox} >
                <Link to='/'>
                    <ArrowBackIcon className={classes.back} />
                </Link>
            </div>

            <div className={classes.h2Box} >
                <Typography variant="h2" className={classes.h2}>Sign up</Typography>
            </div>

            <div className={classes.formBox} >


            {/* Personal Information **********************************************************/}

            <Typography variant="h6" className={classes.h6}>Personal Information</Typography>


                {/* First Name **********************************************************/}
                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >First Name</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>setForm({...form, FirstName: e.target.value})}
                                type='email'
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}} onClick={console.log(form)}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>
            {/* Last Name **********************************************************/}
                <div className={classes.formItem} >
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel  >Last Name</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>setForm({...form, LastName: e.target.value})}
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                type='text'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}} d/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>   
            {/* BirthDate **********************************************************/}
                <div className={classes.formItem}>
                    <KeyboardDatePicker
                        clearable
                        inputVariant="outlined"
                        label="Date of Birth"
                        type='tel'
                        onChange={(date)=> setForm({...form, BirthDate: date})}
                        value={form.BirthDate}
                        format="MM/DD/yyyy"
                        style={{width: "86%", display: 'inline-block'}}
                    />
                    <IconButton style={{width: "14%" ,display: 'inline-block'}}>
                            <HelpIcon style={{fontSize:'25px'}}/>
                    </IconButton>
                </div>   

            {/* CONTACT NUMBER **********************************************************/}
                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel  >Contact Number</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, Contact: e.target.value})
                                }}
                                
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                type="tel"
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>   

            {/* Email Address **********************************************************/}

                <div className={classes.formItem}>
                    <FormControl  className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >Email Address</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, Email: e.target.value})
                                }}
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                type='email'
                                // fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>

            {/* Spouse **********************************************************/}

            <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel  >Spouse</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, Spouse: e.target.value})
                                }}
                                autoComplete={false}
                                type='text'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>


            



        
        {/* COMPLETE ADDRESS **********************************************************/}

            <Typography variant="h6"  >Complete Address</Typography>


                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel  >Country</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>setForm({...form, country: e.target.value})}
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <HelpIcon style={{fontSize:'25px'}}/>
                                        </IconButton>
                                    </InputAdornment>
                                    }

                            />
                           
                    </FormControl>
                </div>   

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel  >House/Apartment, Street, Barangay</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>setForm({...form, address: e.target.value})}
                                multiline
                                rows={4}
                                fullWidth
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                // autoComplete="address-line1"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <HelpIcon style={{fontSize:'25px'}}/>
                                        </IconButton>
                                    </InputAdornment>
                                    }
                            />
                            
                    </FormControl>
                </div>   

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >Town/City</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>setForm({...form, city: e.target.value})}
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                fullWidth
                                // autoComplete="address-level2"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <HelpIcon style={{fontSize:'25px'}}/>
                                        </IconButton>
                                    </InputAdornment>
                                    }
                            />
                           
                    </FormControl>
                </div> 

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >Zip Code </InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>setForm({...form, zip: e.target.value})}
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                type='address'
                                fullWidth
                                // autoComplete="postal-code"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <HelpIcon style={{fontSize:'25px'}}/>
                                        </IconButton>
                                    </InputAdornment>
                                    }
                            />
                    </FormControl>
                </div>
                
        {/* PHBWORX Information **********************************************************/}

            <Typography variant="h6" className={classes.h6} >PHBWORX Account</Typography>

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >PHB Account Username</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, Username: e.target.value})
                                }}
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                type='name'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>
                    

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{width:'87%'}}>
                        <InputLabel  id="demo-simple-select-outlined-label" >Present Ranking</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={form.Ranking}
                                label="Age"
                                onChange={(e)=> setForm({...form, Ranking: e.target.value})}
                                >
                                <MenuItem value={"affiliate"}>Affiliate</MenuItem>
                                <MenuItem value={"gold"}>Gold</MenuItem>
                                <MenuItem value={"platinum"}>Platinum</MenuItem>
                                <MenuItem value={"diamond"}>Diamond</MenuItem>
                                <MenuItem value={'pearl'}>Pearl</MenuItem>
                            </Select>
                    </FormControl>
                    <IconButton edge="end">
                        <HelpIcon style={{fontSize:'25px'}}/>
                    </IconButton>
                </div>

            {/* Proof of Activation **********************************************************/}

            <Typography variant="h6" className={classes.h6} >Proof of Activation</Typography>

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >First Purchase/Activation Ref. No.</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, proof: e.target.value})
                                }}
                                
                             
                                type='name'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>

                <div className={classes.formItem}>
                        <KeyboardDatePicker
                                clearable
                                inputVariant="outlined"
                                label="Date Of Purchase"
                                onChange={(date)=>{
                                    setForm({...form, dateproof: date})
                                }}
                                type='tel'
                                value={form.dateproof}
                                format="MM/DD/yyyy"
                                style={{width: "86%", display: 'inline-block'}}
                            />
                            <IconButton style={{width: "14%" ,display: 'inline-block'}}>
                                    <HelpIcon style={{fontSize:'25px'}}/>
                            </IconButton>
                </div>



            {/* Name Three Active Upline **********************************************************/}

                
                <Typography variant="h6" >Name Three Active Uplines</Typography>
                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >Upline #1</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, upline1: e.target.value})
                                }}
                                
                                type='name'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel  >Upline #2</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, upline2: e.target.value})
                                }}
                                
                                type='name'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel  >Upline #3</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, upline3: e.target.value})
                                }}
                                
                                type='name'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>

        {/* Authorization **********************************************************/}

        <Typography variant="h6" className={classes.h6} >Upline Authorization</Typography>

        {/* Nearest Upline **********************************************************/}

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >Sponsor's Username</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, Sponsor: e.target.value})
                                }}
                               
                                type='name'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel  >Nearest PCM Upline</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, PCMupline: e.target.value})
                                }}
                              
                              
                                type='name'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>


                <div className={classes.formItem} style={{textAlign:'center'}}>
                    <Card>
                         <Typography variant="h6" style={{textAlign: 'center'}} >Post Your PCM Signature Here
                            <IconButton >
                                {
                                form.PCMSignature ? 
                                <ReplayIcon style={{fontSize:'25px'}} onClick={()=>{setForm({...form, PCMSignPreview: null, PCMSignature: null})}}/> : 
                                <HelpIcon style={{fontSize:'25px'}} />
                                
                                }
                        
                            </IconButton>
                            </Typography>

                            {!form.PCMSignature && 
                                <input
                                type="file"
                                multiple={ false }
                                onChange={(e) => {
                                    const objectUrl = URL.createObjectURL(e.target.files[0]);
                                    setForm({...form, PCMSignPreview: objectUrl, PCMSignature: e.target.files[0] });
                                    console.log(objectUrl)
                                    URL.revokeObjectURL(e.target.files[0])
                                    // setForm({...form, Sign: e.target.files[0]})

                                    }}
                                />}
                         
                    </Card>
                </div>
                <div className={classes.formItem} style={{display: (form.PCMSignPreview? 'block' : 'none')}}>
                    <Card>  
                        <img style={{height: '200px', width: '100%'}} src={form.PCMSignPreview} />
                    </Card>
                </div>



        {/* Personal Testing **********************************************************/}

        <Typography variant="h6" className={classes.h6} >PCM Journey Online Test</Typography>

            {/* Why? **********************************************************/}

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >Why Are You Enrolling For PCM? </InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>setForm({...form, Purpose: e.target.value})}                     
                                multiline
                                rows={4}
                                rowsMax={15}                              
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>

                <div className={classes.formItem} style={{textAlign:'center'}}>
                    <FormControl component="fieldset">
                        <FormLabel style={{marginBottom: "20px"}} component="legend">Have you attended any training program in Network Building?</FormLabel>
                            <RadioGroup aria-label="gender" name="customized-radios"
                            value={form.Trained} 
                            onChange={(e)=> setForm({...form, Trained: e.target.value})}>
                                <FormControlLabel value='true' control={<Radio color='primary'/>} label="Yes" />
                                <FormControlLabel value='false' control={<Radio color='primary' />} label="No" />
                        </RadioGroup>
                    </FormControl>
                </div>
                

                {form.Trained === 'true' && <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel >List The Training Programs: </InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>setForm({...form, Programs : e.target.value})}
                                multiline
                                rows={4}
                                type='text'
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>}

                <div className={classes.formItem}>
                    <KeyboardDatePicker
                        clearable
                        inputVariant="outlined"
                        type='tel'
                        label="Start Of Your PCM Journey"
                        onChange={(date)=> setForm({...form, Start: date})}
                        value={form.Start}
                        format="MM/DD/yyyy"
                        style={{width: "86%", display: 'inline-block'}}
                    />
                    <IconButton style={{width: "14%" ,display: 'inline-block'}}>
                            <HelpIcon style={{fontSize:'25px'}} onClick={()=> console.log(form)}/>
                    </IconButton>
                    
                </div> 
                <div className={classes.formItem} style={{textAlign:'center'}}>
                <Typography variant="h5" >End of your 90 Days PCM Journey</Typography>
                    <Typography variant="h4" >{`${form.End.format('MMMM DD, YYYY')}`}</Typography>
                </div> 


        {/* Final **********************************************************/}
        <Typography variant="h6" className={classes.h6} ></Typography>


                <div className={classes.formItem} style={{textAlign:'center'}}>
                    <Card>
                         <Typography variant="h6" style={{textAlign: 'center'}} >Post Your Signature Here
                            <IconButton >
                                {
                                form.PersonalSignature ? 
                                <ReplayIcon style={{fontSize:'25px'}} onClick={()=>{setForm({...form, PersonalSignPreview: null, PersonalSignature: null})}}/> : 
                                <HelpIcon style={{fontSize:'25px'}} />
                                
                                }
                        
                            </IconButton>
                            </Typography>

                            {!form.PersonalSignature && 
                                <input
                                type="file"
                                multiple={ false }
                                onChange={(e) => {
                                    // setForm({...form, PersonalSignature: e.target.files[0]});
                                    const objectUrl = URL.createObjectURL(e.target.files[0]);
                                    setForm({...form, PersonalSignPreview: objectUrl, PersonalSignature: e.target.files[0] });
                                    console.log(objectUrl)
                                    URL.revokeObjectURL(e.target.files[0])
                                    // setForm({...form, Sign: e.target.files[0]})

                                    }}
                                />}
                         
                    </Card>
                </div>
                <div className={classes.formItem} style={{display: (form.PersonalSignPreview? 'block' : 'none')}}>
                    <Card>  
                        <img style={{height: '200px', width: '100%'}} src={form.PersonalSignPreview} />
                    </Card>
                </div>

                <Typography variant="h6" >Make a password for your PCM Journey Account</Typography>
               
                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel  >Password</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, Password: e.target.value})
                                }}
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                type={showPassword ? 'text' : 'password'}
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>

                <div className={classes.formItem}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                        <InputLabel>Confirm Password</InputLabel>
                            <OutlinedInput
                                onBlur={(e)=>{
                                    setForm({...form, PasswordConfirm: e.target.value})
                                }}
                                inputProps={{
                                    autoComplete: 'none',
                                }}
                                type={showPassword ? 'text' : 'password'}
                                fullWidth
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    <IconButton edge="end">
                                        <HelpIcon style={{fontSize:'25px'}}/>
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                    </FormControl>
                </div>





            {/* End **********************************************************/}

          

                {/* End**********************************************************/}
                <div className={classes.formItem} style={{textAlign: 'left',display:'flex',alignItems: "center"}}>
                    <div  style={{display: 'inline-block'}}>
                        <FormControlLabel
                           
                            control={
                            <Checkbox
                                checked={checked}
                                onChange={(e)=> setChecked(!checked)}
                                color="primary"
                            />
                            }/>
                    </div>
                    <div style={{width: '80%' ,display: 'inline-block'}}>
                        <Typography variant="caption" >I agree to the <a href="https://pcmjourney.com">Privacy Policy, Terms And Conditions</a> of <a href="https://phb2020.com">
                        PHBWorx International</a>, <a href="https://ebuddy.ph">ebuddy.ph</a> and <a href="https://pcmjourney.com">PCM Journey.</a></Typography>
                    </div>

                </div> 

            
                





                <div className={classes.formItemButton}>
                            <Button variant="contained" fullWidth color="primary" className={classes.appButton} onClick={(e)=>{
                            
                            SignUp(e);
                            }} >
                                    <Typography variant="h5" >Proceed</Typography>
                                    <ArrowForwardIcon style={{fontSize: '30px'}}/>
                            </Button>
                </div>
                
                     
               
            </div>



        </div>
    );
}
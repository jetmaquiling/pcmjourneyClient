import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory 
} from "react-router-dom";
import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './Theme/theme';

import Dashboard from './Pages/dashboard/dashboard';
import LandingPage from './Pages/landingpage/landingpage';
import SignUp from './Pages/signup/signup';
import LogIn from './Pages/login/login';

import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Contact from './Pages/contact/contact';


import {AuthContext} from './Provider/context'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {

  
  const ctx = React.useContext(AuthContext);


 

  return (
  
      <ThemeProvider theme={theme}>

        <Dialog
        open={ctx.modal.open}
        onClose={()=> {ctx.setModal({open: false})}} 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{ctx.modal.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {ctx.modal.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=> {ctx.setModal({open: false})}} color="primary">
              Cancel
            </Button>
            <Button onClick={ctx.modal.function} color="primary" autoFocus>
              Proceed
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar open={ctx.toaster.open} autoHideDuration={7000} onClose={ctx.handleClose}>
                <Alert onClose={ctx.handleClose} severity={ctx.toaster.status}>
                    {ctx.toaster.message}
                </Alert>
        </Snackbar>

        <Backdrop style={{zIndex: 9998}} open={ctx.load} >
                <CircularProgress color="inherit" />
        </Backdrop>

        <Router>
            <Header/>
              <Switch>
                <Route path="/" exact>
                  <LandingPage />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/login">
                  <LogIn />
                </Route >
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/dashboard" >
                <Dashboard />
                </Route>
                
                <Route>
                  <LandingPage />
                </Route>
              </Switch>
            <Footer/>
        </Router>   
      </ThemeProvider>
    
  );
}

export default App;

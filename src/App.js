import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './Theme/theme';

import Dashboard from './Pages/dashboard/dashboard';
import LandingPage from './Pages/landingpage/landingpage';
import SignUp from './Pages/signup/signup';
import LogIn from './Pages/login/login';


import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Contact from './Pages/contact/contact';


function App() {

  return (
  
      <ThemeProvider theme={theme}>
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
                {/* <Route path="/dashboard" >
                <Dashboard />
                </Route> */}
                
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

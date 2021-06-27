import * as React from 'react';
import axios from 'axios';


export const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (email,password)=> {console.log("TRUE")},
});




function AuthContextProvider(props) {
    const [auth, setAuth] = React.useState({
        token: '',
        isLoggedIn:false,
    });

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

    

    const login = (email,password) => async () => { 
        console.log("Requsting LogIn")
        try{
            const {data} = await axios.post('https://walakajowabackend.herokuapp.com/auth/local', {
                identifier: email,
                password: password,
            });


            const json = await data;
            setAuth({token:json.jwt, isLoggedIn: true});
            setCookie('token',json.jwt,7);
            setCookie('isLoggedIn','true',7);
            console.log('success LogIn', email ,password, json.jwt);

        }catch(error){
            console.log(error.message)
        }
    
    }

    const SignUp = (email,password) => async () => { 
      console.log("Requsting register")
      try{
          const {data} = await axios.post('https://walakajowabackend.herokuapp.com/auth/local/register', {
              identifier: email,
              password: password,
          });


          const json = await data;
          setAuth({token:json.jwt, isLoggedIn: true});
          setCookie('token',json.jwt,7);
          setCookie('isLoggedIn','true',7);
          console.log('success register', email ,password, json.jwt);

      }catch(error){
          console.log(error.message)
      }
  
  }



  return <AuthContext.Provider 
    value={{
        token: auth.token,
        isLoggedIn: auth.isLoggedIn,
        login: login
    }}
    
  >
      {props.children}
  </AuthContext.Provider>

}

export default AuthContextProvider;
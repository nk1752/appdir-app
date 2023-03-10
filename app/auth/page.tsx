'use client'
import Link from 'next/link';

import styles from './styles.module.css'

import {Amplify, Auth} from 'aws-amplify'
import config from '../../cognito/cognito-config';

import {useState} from 'react'

Amplify.configure(config)


function AuthHome() {

    const [username, setUsername] = useState('user1016')
    const [password, setPassword] = useState('User#1016')
    const [cognitoUser, setCognitoUser] = useState(null)
    
    const [email, setEmail] = useState('nadeemkhalid@outlook.com')
    const [phone_number, setPhoneNumber] = useState('+12053967637')
    const [code, setCode] = useState('')

    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,          // optional
                    phone_number,   // optional - E.164 number convention
                    // other custom attributes 
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: false,
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
    
    async function confirmSignUp() {
      
      console.log(code)

      try {
        await Auth.confirmSignUp(username, code);
      } catch (error) {
          console.log('error confirming sign up', error);
      }
    }


    async function SignIn() {
    
        try {
            const cognitoUser = await Auth.signIn(username, password);
            
            console.log(cognitoUser);
            setCognitoUser(cognitoUser);
            localStorage.setItem('cognitoUser', JSON.stringify(cognitoUser))
              //GoToCodePage();
        } catch (error) {
            console.log('error signing in', error);
        }
    
      }
    
      async function confirmSignIn() {
        
        try {
          const loggedUser = await Auth.confirmSignIn(cognitoUser, code, 'SMS_MFA')
          
          console.log(code)
          console.log(loggedUser)
    
          const JwtToken = loggedUser.getSignInUserSession()?.getAccessToken()?.getJwtToken() || '';  
                
        
        } catch (error) {
          console.log('error signing in', error);
        }
      } 

      async function signOut() {
        try {
            await Auth.signOut();
            console.log('signing out...')
        } catch (error) {
            console.log('error signing out: ', error);
        }
      }



    return (
        <div className={styles.right}>

            <button type='button' onClick={ signUp }>Sign Up</button><br />
            <button type='button' onClick={ confirmSignUp }>Sign Up Code</button><br />
            <button type='button' onClick={ SignIn }>Sign In</button><br />
            <button type='button' onClick={ confirmSignIn }>Confirm Sign In</button><br />

            <label>Enter your code: <input  type="text" value={code}  onChange={(e) => setCode(e.target.value)} />  </label><br />
            <label>Username: <input  type="text" value={username}  onChange={(e) => setUsername(e.target.value)} />  </label><br />
            <label>Password: <input  type="text" value={password}  onChange={(e) => setPassword(e.target.value)} />  </label><br />
            <button type='button' onClick={ signOut }>Sign Out</button><br />

        </div>

    )
}

export default AuthHome;
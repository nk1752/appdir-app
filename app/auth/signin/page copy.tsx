'use client'

import styles from '../styles.module.css'
import { useEffect, useState, useRef } from 'react'

import {Amplify, Auth} from 'aws-amplify'
import config from '../../../cognito/cognito-config'

Amplify.configure(config)

function Signin() {

    const [code, setCode] = useState('')
    const [jwtToken, setJwtToken] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const count = useRef('')
    const [cognitoUser, setCognitoUser] = useState(null)

    async function handleSignIn() {
            
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
    
      async function handleConfirmSignIn() {

        try {
          const loggedUser = await Auth.confirmSignIn(cognitoUser, code, 'SMS_MFA')
          
          console.log(code)
          console.log(loggedUser)
    
          const JwtToken = loggedUser.getSignInUserSession()?.getAccessToken()?.getJwtToken() || '';
    
          setJwtToken(JwtToken)
    
                
        
        } catch (error) {
          console.log('error signing in', error);
        }
      }
    

    return (
        <div className={styles.right}>
            
            
            <form className={styles.card} onSubmit={handleSignIn}>
                
                <h1>Sign In</h1><br />

                <label htmlFor="username">Username:</label><br />
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    /><br /><br />
               
                <label htmlFor="password">Password:</label><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    /><br /><br />
                
                <button type="submit">Submit</button>

            </form><br />
           
            
            
            <form  className={styles.card} onSubmit={handleConfirmSignIn}>
                
                <label>MFA code: </label><br />
                <input  type="text" value={code}  onChange={(e) => setCode(e.target.value)} /><br /><br />

                <button type="submit">Verify</button>
          
            </form><br />
            

            <p >username: {username}</p>
            <p >password: {password}</p>
            <p >cognitoUser: {cognitoUser}</p>

        </div>

    )
}

export default Signin;
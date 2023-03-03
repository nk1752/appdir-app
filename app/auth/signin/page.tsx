'use client'

import styles from '../styles.module.css'
import { useEffect, useState, useRef } from 'react'

import {Amplify, Auth} from 'aws-amplify'
import config from '../../../cognito/cognito-config'

Amplify.configure(config)

function Signin() {

    const [code, setCode] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const count = useRef('')
    const [cognitoUser, setCognitoUser] = useState(null)

    async function handleSignIn() {
    
        try {
            const signinUser = await Auth.signIn(username, password);

            setCognitoUser(signinUser);
            
            //console.log(cognitoUser);
            
            //localStorage.setItem('signinUser', JSON.stringify(signinUser))
            //GoToCodePage();
            
        } catch (error) {
            console.log('error signing in', error);
        }
    
      }
    
    async function handleConfirmSignIn() {

        //console.log(username)
        //console.log(code)

        const myUser = localStorage.getItem('signinUser') 

        //console.log(myUser)

        try {
          const loggedUser = await Auth.confirmSignIn(myUser, code, 'SMS_MFA')
          
          //localStorage.setItem('signinUser', JSON.stringify(loggedUser))
        
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
            

            <h1 >username: {username}</h1>
            <h1 >password: {password}</h1>
            <p >cognitoUser: {cognitoUser}</p>

        </div>

    )
}

export default Signin;
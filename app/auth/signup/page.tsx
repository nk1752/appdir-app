'use client'

import styles from '../styles.module.css'
import {useState} from 'react'

import {Amplify, Auth} from 'aws-amplify'
import config from '../../../cognito/cognito-config'

Amplify.configure(config)


function Signup() {

    const [username, setUsername] = useState('user1008')
    const [password, setPassword] = useState('User#1008')
    const [email, setEmail] = useState('nadeemkhalid@outlook.com')
    const [phone_number, setPhoneNumber] = useState('+12053967637')
    const [code, setCode] = useState('')
    const [mfaType, setMfaType] = useState('SMS_MFA')

    async function signUp() {

        console.log('called Sign Up...')
        
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
        try {
          await Auth.confirmSignUp(username, code);
        } catch (error) {
            console.log('error confirming sign up', error);
        }
      }

    return (
        <div className={styles.main}>
            <form className={styles.card} onSubmit={signUp}>
                <h1>Sign Up</h1><br />

                <label htmlFor="username">Username:</label><br />
                <input type="text" id="username" name="username" /><br /><br />
               
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" /><br /><br />

                <label htmlFor="phone">Phone Number:</label><br />
                <input type="phone" id="phone" name="phone" /><br /><br />

                <label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" /><br /><br />
                
                <button type="submit">Submit</button>

            </form><br />

            <form className={styles.card} onSubmit={confirmSignUp}>
                
                <label>Email verification code: </label><br />
                <input  type="text" value={code}  onChange={(e) => setCode(e.target.value)} /><br /><br />

                <button type="submit">Verify</button>
          
            </form>    

        </div>

    )
}

export default Signup;
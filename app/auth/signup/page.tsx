'use client'

import styles from '../styles.module.css'
import {useState} from 'react'

import {Amplify, Auth} from 'aws-amplify'
import config from '../../../cognito/cognito-config'

Amplify.configure(config)

function SignupHome() {

    const [username, setUsername] = useState('user1016')
    const [password, setPassword] = useState('User#1016')
    const [email, setEmail] = useState('nadeemkhalid@outlook.com')
    const [phone_number, setPhoneNumber] = useState('+12053967637')
    const [code, setCode] = useState('')
    const [mfaType, setMfaType] = useState('SMS_MFA')

    async function handleSignUp() {

        sessionStorage.setItem('nsername', username)
        sessionStorage.setItem('password', password)
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('phoneNumber', phone_number)
        

        try {
            const user = await Auth.signUp({
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

    async function handleConfirmSignUp() {
        try {
            await Auth.confirmSignUp(username, code);
          } catch (error) {
              console.log('error confirming sign up', error);
            }
        
    }

    return (
        <div className={styles.right}>
            <form  className={styles.card} >

                <label>Username: <input  type="text" value={username}  onChange={(e) => setUsername(e.target.value)} />  </label><br />
                <label>Password: <input  type="text" value={password}  onChange={(e) => setPassword(e.target.value)} />  </label><br />
                <label>Email: <input  type="text" value={email}  onChange={(e) => setUsername(e.target.value)} />  </label><br />
                <label>Phone Number: <input  type="text" value={phone_number}  onChange={(e) => setPassword(e.target.value)} />  </label><br />
                <button type='button' onClick={ handleSignUp }>Sign Up</button><br />
            
            <label>Enter your code: <input  type="text" value={code}  onChange={(e) => setCode(e.target.value)} />  </label><br />
            <button type='button' onClick={ handleConfirmSignUp }>Sign Up Code</button><br />
            
            
            
            
            
            </form>  

        </div>

    )
}

export default SignupHome;
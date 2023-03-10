import {Amplify, Auth} from 'aws-amplify'
import { useState } from 'react';
import config from './cognito-config'

Amplify.configure(config)

export async function SignUp(username, password, email, phone_number) {
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

export async function ConfirmSignUp(username, code) {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
      console.log('error confirming sign up', error);
    }
}

export async function SignIn(username, password) {
           
  try {
      const cognitoUser = await Auth.signIn(username, password);
      
      console.log(cognitoUser);
      
      localStorage.setItem('cognitoUser', JSON.stringify(cognitoUser))
  
  } catch (error) {
      console.log('error signing in', error);
  }

}

export async function ConfirmSignIn(code) {

    console.log('ConfirmSignIn')
    console.log('code: ' + code)
    
    let cognitoUserString = localStorage.getItem('cognitoUser')
    let cognitoUser = JSON.parse(cognitoUserString) || " ";
    console.log(cognitoUser)
        
    try {
      
      const loggedUser = await Auth.confirmSignIn(cognitoUser, code)
      
      console.log(code)
      console.log(loggedUser)

      const JwtToken = loggedUser.getSignInUserSession()?.getAccessToken()?.getJwtToken() || '';

    } catch (error) {
      console.log('error confirming MFA code => ', error);
    }
    
  }

  export async function SignOut() {
    try {
        await Auth.signOut();
        console.log('signing out...')
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
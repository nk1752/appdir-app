import {Amplify, Auth} from 'aws-amplify'
import { useState } from 'react';
import config from './cognito-config'

Amplify.configure(config)


  export async function SignOut() {
    try {
        await Auth.signOut();
        console.log('signing out...')
        
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
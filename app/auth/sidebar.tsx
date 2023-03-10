'use client'

import Link from 'next/link';

import styles from './styles.module.css'

import { signOut } from './signin/page';

function handleSignOut() {

    signOut()

}

function Sidebar() {
    return (
       
            <div className={styles.left}>
                <ul><br />
                    <h2>                
                        <Link href="/auth/signin">Sign In</Link>
                    </h2><br />
                    <h2>                
                        <Link href="/auth/signup">Sign Up</Link>
                    </h2><br />  
                    <h2>        
                        <Link href="/auth/passwordreset">Password Reset</Link>
                    </h2><br /><br />   
                    <h2>        
                        <button onClick={handleSignOut}>Sign Out</button>
                    </h2><br />         
                </ul>
            </div>       
        
    )
}

export default Sidebar;
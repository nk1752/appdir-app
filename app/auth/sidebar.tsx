import Link from 'next/link';

import styles from './styles.module.css'

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
                    </h2><br />           
                </ul>
            </div>       
        
    )
}

export default Sidebar;
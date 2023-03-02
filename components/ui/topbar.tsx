import styles from './bar.module.css'
import Link from 'next/link';
// this
function Topbar() {
    return (
        <div >
            <nav className={styles.nav}>
                <ul>
                    
                    <h1>                
                        <Link href="/">Home</Link>
                    </h1>
                    <h1>                
                        <Link href="/data">Data</Link>
                    </h1>
                    <h1>                
                        <Link href="/auth">Auth</Link>
                    </h1>  
                    <h1>                
                        <Link href="/about">About</Link>
                    </h1>                        
                                        
                </ul>
            </nav>

        </div>

    )
}

export default Topbar;
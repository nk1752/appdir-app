'use client'

import Link from 'next/link';

import styles from './styles.module.css'


function Sidebar() {
    return (
       
            <section className={styles.left}>
                <ul><br />
                    <h2>                
                        <Link href="/data/id">by Id</Link>
                    </h2>
                    <br /> 
                    <h2>        
                        <Link href="/data/range">by Range</Link>
                    </h2>
                    <br />
                    <h2>        
                        <Link href="/data/name">by Name</Link>
                    </h2>
                    <br />
                    <h2>        
                        <Link href="/data/new">New</Link>
                    </h2>
                    <br /><br />   
       
                </ul>
            </section>       
        
    )
}

export default Sidebar;
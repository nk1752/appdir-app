

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const url = 'appdir-service'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>

        <h1>The process.env.ENV is: {process.env.ENV}</h1>
        <h1>The process.env.PLATFORM is: {process.env.PLATFORM}</h1>
      
      
      </div>
    </main>
  )
}

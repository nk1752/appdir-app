

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const url = 'appdir-service'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>

        <h1>process.env.NODE_ENV: {process.env.NODE_ENV}</h1>
        <h1>process.env.PLATFORM: {process.env.PLATFORM}</h1>
      
      
      </div>
    </main>
  )
}

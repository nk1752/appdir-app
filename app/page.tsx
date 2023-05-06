

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const url = process.env.NEXT_PUBLIC_API_SERVER_URL

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>

        <h1>The URL is: {url}</h1>
      
      
      </div>
    </main>
  )
}

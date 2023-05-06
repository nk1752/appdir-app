

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>

        <h1>Hello image tag: github.sha v1</h1>
      
      
      </div>
    </main>
  )
}

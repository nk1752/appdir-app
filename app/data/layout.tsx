import Sidebar from "./sidebar"

import styles from './styles.module.css'

export default function DataLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={styles.both}>
      <Sidebar />
      {children}
    </section>
  )
}
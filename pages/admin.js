import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Admin from '../components/Admin'


export default function Home() {
  return (
    <div className={styles.container}>
      <Admin />
    </div>
  )
}

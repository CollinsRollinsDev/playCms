import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dbConnect from '../utils/dbConnect'
import Blog from '../components/Blog';

export default function Home() {
  // dbConnect();

  return (
    <div className={styles.container}>
      <Blog />
    </div>
  )
}

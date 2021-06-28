import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Post from '../models/Posts';
// import dbConnect from '../utils/dbConnect';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Blog from '../components/Blog';


export default function Home() {
  return (
    <div>
      <Blog />
    </div>
  )
}

import axios from 'axios';
import {useState, useEffect} from 'react';
import styles from './Blog.module.css';
import Link from 'next/link';
// import dbConnect from '../utils/dbConnect';


const Blog = () => {
   let [blogs, setBlogs] = useState([]);



   const getPosts =  async() => {
      axios('/api/posting')
      .then(res => {
         let file = res.data.data
         file = file.reverse();
      setBlogs(blogs = file)
      // console.log(blogs.title)
      })
      .catch(err => console.log(err.message))
   }
   useEffect(() => {
      getPosts();
   },[])


  const blogger =  blogs.map((blog) => {
      return(
         <Link href="/articles/[id]" as={`/articles/${blog._id}`}>
         <div className={styles.postContainer}>
            <h1 key>{blog.title}</h1>
            <p>{blog.content = blog.content.substring(0, 150)+ "....."}</p>
         </div>
         </Link>
      )
   })

   return (
      <div className={styles.container}>
          <h1>Posts Previews</h1>
         {
            blogger
         }      
      </div>
   )
}

export default Blog

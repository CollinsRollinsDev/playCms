import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';


const PostTemplate = () => {
   let [blog, setBlog] = useState();

   const router = useRouter();
   const id = router.query.id;
   console.log(id)

   const getPost = async () => {
      if(id){
        await axios(`/api/getpost?id=${id}`)
        .then((res) => {
         setBlog(blog = res.data);
         console.log(blog.title);
        })
      }
   }

   useEffect(() => {
      getPost();
   }, [])


   return (
      <div>
         <h1>{blog ? blog.title : null}</h1>
         <div>
            {blog ? blog.content : null}
         </div>
         <p>{blog ? blog.tags : null}</p>
      </div>
   )
}

export default PostTemplate

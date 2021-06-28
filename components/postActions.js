import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PostActions = () => {
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const router = useRouter();
   const id = router.query.id;
   console.log(id)

   const deletePost = async () => {
      if(id){
        await axios(`/api/posting?id=${id}`, {
         method: "DELETE",
        })
        .then((res) => {
           console.log(res)
         alert(res.data.message);
        })
      }
   }
   return (
      <div>
         <button>Update Post</button>
         <button onClick={deletePost}>Delete Post</button>
      </div>
   )
}

export default PostActions
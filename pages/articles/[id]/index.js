import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import PostTemplate from '../../../components/PostTemplate';

const article = () => {
   
   return (
      <div>
         <PostTemplate />
         
      </div>
   )
}

export default article

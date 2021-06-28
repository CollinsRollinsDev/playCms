import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import PostTemplate from '../../../components/PostTemplate';
import PostActions from '../../../components/PostActions';

const article = () => {
   
   return (
      <div>
         <PostTemplate />
         <PostActions />
      </div>
   )
}

export default article

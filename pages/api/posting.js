import dbConnect from '../../utils/dbConnect';
import Post from '../../models/Posts';

dbConnect();


export default async function (req, res) {
  const method = req.method;
  const {title, tags, content} = req.body;
  console.log(method)


  if(method == "GET"){
   const data = await Post.find()
   if(data){
    return res.json({data})
   }
  }
  else if(method == "POST"){
    console.log(title, tags, content)
    const posts = await Post.create(req.body);
   return res.send("Post created successfully!")
 }
}
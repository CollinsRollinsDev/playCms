import dbConnect from '../../utils/dbConnect';
import Post from '../../models/Posts';

dbConnect();


export default async function (req, res) {
  const method = req.method;
  const {title, tags, content} = req.body;
  console.log(method)

// Get Posts
  if(method == "GET"){
   const data = await Post.find()
   if(data){
    return res.json({data})
   }
  } 

  // Add Posts
  else if(method == "POST"){
    console.log(title, tags, content)
    const posts = await Post.create(req.body);
   return res.json({
    status: "success",
    message: "Post created successfully"
  })
 }

//  Delete Post
 else if(method === "DELETE"){
  const id = req.query.id;
  console.log(id);
  let posts = await Post.findById(id);
  if(posts){
     console.log(posts)
     await posts.delete()
     return res.send({
       status: "success",
       message: "Post deleted successfully"
     })
  } else{
     return res.send("something went wrong!");
  }
 }
}
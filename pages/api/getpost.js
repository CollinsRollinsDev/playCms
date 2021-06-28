import dbConnect from '../../utils/dbConnect';
import Post from '../../models/Posts';
dbConnect();

export default async (req, res) => {
   const id = req.query.id;

   const data = await Post.findById(id);
   if(data){
      console.log(data)
      return res.json(data);
   } else{
      return res.send("something went wrong!");
   }
}
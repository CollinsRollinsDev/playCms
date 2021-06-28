const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
   title:{
      type: String,
      required: true
   },
   tags:{
      type: String,
      required: true
   },
   content: {
      type:String,
      required: true
   }
})

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);

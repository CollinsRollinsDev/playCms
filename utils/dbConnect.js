import mongoose from 'mongoose';

const connection = {}

async function dbConnect() {
    if(connection.isConnected){
        return;
    }
    const db = await mongoose.connect("mongodb+srv://admin:adminpass@blog.ol1ll.mongodb.net/blog_data?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState;
    console.log(`Successfully conneced database: ${connection.isConnected}`)

}

export default dbConnect;
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();

export function connect()
{
    mongoose.connect(process.env.DB_CONNECTION_STRING,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>console.log("Mongo db connection successfull."))
    .catch((err:any)=>console.log(err))
}

export function disconnect()
{
    mongoose.connection.close();
    console.log("Mongo db connection closed.")
}


import config from './config/config.js' 
import app from './server/express.js'
import mongoose from 'mongoose' 
const port=process.env.PORT||3010;
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://shabreen:LClvTAb8AtsHwibW@cluster0.93n9qpj.mongodb.net/Marketplace", { useNewUrlParser: true,
//useCreateIndex: true, 
useUnifiedTopology: true } )

 .then(() => {
   console.log("Connected to the database!");
   })
  
mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database: ${config.mongoUri}`) 
})
app.get("/", (req, res) => {
res.json({ message: "Welcome to DressStore Application" });
});


app.listen(port,()=>{
console.log(`Server started on port :${port}`) 
});

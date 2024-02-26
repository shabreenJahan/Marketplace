const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3010,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI ||"mongodb+srv://shabreen:LClvTAb8AtsHwibW@cluster0.93n9qpj.mongodb.net/Marketplace"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
   (process.env.MONGO_PORT || '27017') +
    '/Marketplace' 
    }
    export default config
   
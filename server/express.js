// import express from 'express'
// import bodyParser from 'body-parser'
// import cookieParser from 'cookie-parser'
// import compress from 'compression'
// import cors from 'cors'
// import helmet from 'helmet'
// import Template from './../template.js'
// import productRoutes from './routes/product.routes.js'


// const app = express()
// app.get('/', (req, res) => {
//     res.status(200).send(Template()) 
//     })
    
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/', userRoutes)
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser())
// app.use(compress())
// app.use(helmet())
// app.use(cors())
// export default app


import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template.js'
import productRoutes from './routes/product.routes.js' // Ensure the path is correct

const app = express();

// Serve the template at the root
app.get('/', (req, res) => {
  res.status(200).send(Template());
});

// Middleware to parse request bodies. Note: bodyParser is deprecated as it's a part of express now.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for the product APIs
app.use('/api', productRoutes);

// CookieParser middleware to parse request cookies
app.use(cookieParser());

// Compression middleware to gzip response bodies
app.use(compress());

// Helmet middleware to secure HTTP headers returned by your Express apps
app.use(helmet());

// CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

export default app;

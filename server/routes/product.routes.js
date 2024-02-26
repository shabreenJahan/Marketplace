// import express from 'express'
// 	import productCtrl from '../controllers/product.controller.js' 
// 	const router = express.Router()
// 	router.route('/api/products') 
// 	.get(productCtrl.list)
// 	.post(productCtrl.create)
// 	router.route('/api/products/:productId') 
// 	.get(productCtrl.read)
// 	.put(productCtrl.update) 
// 	.delete(productCtrl.remove)
// 	router.param('productId', productCtrl.productByID) 
//     router.route('/api/products').post(productCtrl.create)
//     router.route('/api/products').get(productCtrl.list)
//     router.param('productId', productCtrl.productByID)
//     router.route('/api/products/:productId').get(productCtrl.read)
//     router.route('/api/products/:productId').put(productCtrl.update)
//     router.route('/api/products/:productId').delete(productCtrl.remove)


// 	export default router
import express from 'express'
import productCtrl from '../controllers/product.controller.js'

const router = express.Router();

// Route to create a new product
router.post('/api/products', productCtrl.create);

// Route to list all products 
router.get('/api/products', productCtrl.getAllProducts); 

// Routes for operations on individual products by productId

router.route('/api/products/:productId').get(productCtrl.productByID)
  router.route('/api/products/:productId').put(productCtrl.update)
router.route('/api/products/:productId').delete(productCtrl.remove)


// Route to delete all products
router.delete('/api/products', productCtrl.removeAll);

// Route parameter middleware to set product by ID
router.param('productId', productCtrl.productByID);
// Route to search products by keyword


export default router;


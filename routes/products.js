var productsController = require('../controllers/products.js'),
    Joi  = require('joi');
    
module.exports = [{
	  method : 'GET',
	  path : '/api/products',
	  handler : productsController.index
	},{
	  method : 'POST',
	  path : '/api/products',
	  handler : productsController.create,
		config: {
		    validate: {
		        payload: {
		            name: Joi.string().required(),
		            price: Joi.number().required(),
		        }
		    }
		}
	}
];
var productsController = require('../controllers/products.js'),
Joi  = require('joi');

var validateObject = {
	payload: {
		name: Joi.string().required(),
		category: Joi.string().required(),
		price: Joi.number().required(),
		ingredients: Joi.array().min(1),
		photo: Joi.string().uri().required()
	}
};

var validateObjectDelete = {
	params : {
		id: Joi.string().required()
	}	
}

module.exports = [{
	method : 'GET',
	path : '/api/products',
	handler : productsController.index
},{
	method : 'POST',
	path : '/api/products',
	handler : productsController.create,
	config: {
		validate: validateObject
	}
},{
	method : 'PUT',
	path : '/api/products/{id}',
	handler : productsController.update,
	config: {
		validate: validateObject
	}
},{
	method : 'DELETE',
	path : '/api/products/{id}',
	handler : productsController.remove,
	config: {
		validate: validateObjectDelete
	}
}];
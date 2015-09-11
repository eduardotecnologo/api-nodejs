var categoriesController = require('../controllers/categories.js'),
Joi  = require('joi');

var validateObject = {
	payload: {
		name: Joi.string().required()
	}
};

var validateObjectDelete = {
	params : {
		id: Joi.string().required()
	}	
}

module.exports = [{
	method : 'GET',
	path : '/api/categories',
	handler : categoriesController.index
},{
	method : 'GET',
	path : '/api/categories/{id}/products',
	handler : categoriesController.listProductsByCategory
},{
	method : 'POST',
	path : '/api/categories',
	handler : categoriesController.create,
	config: {
		validate: validateObject
	}
},{
	method : 'PUT',
	path : '/api/categories/{id}',
	handler : categoriesController.update,
	config: {
		validate: validateObject
	}
},{
	method : 'DELETE',
	path : '/api/categories/{id}',
	handler : categoriesController.remove,
	config: {
		validate: validateObjectDelete
	}
}];
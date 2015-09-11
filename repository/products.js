var productModel = require('../model/product');

var productRepository = module.exports = {};

productRepository.all = function(cb){
	return productModel.find({}, function(err, data){
		if(err){
			cb(err,null);
		}

		cb(null, data);
	});
}

productRepository.create = function(data,cb){
	var model = new productModel(data);

	model.save(function(err,data){
		if(err){
			cb(err,null);
		}

		cb(null, data);
	});
}

productRepository.update = function(id, data, cb) {
	var query = { _id : id };
	var dataUpdate = data;
	productModel.update(query,dataUpdate, function(err,data){
		if(err){
			cb(err,null);
		}

		cb(null, data);
	});
}

productRepository.destroy = function(id, cb) {
	var query = { _id : id };
	productModel.remove(query, function(err,data){
		if(err){
			cb(err,null);
		}

		cb(null, data);
	});
}
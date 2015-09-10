var productController = module.exports = {};

productController.index = function(request, reply){
	reply('ok');
}

productController.create = function(request, reply){
	reply(request.payload);
}

return productController;
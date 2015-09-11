var repository = require('../repository/products');

var productController = module.exports = {};

productController.index = function(request, reply){
	repository.all(function(err, data){
		if(err){
			reply.view('responses/default',{
				data : {
					error : true,
					status : 500,
					message : 'Erro ao listar produtos, por favor tente mais tarde.'
				}
			});			
		}

		reply.view('products',{
			products : data 
		});
	})
};
productController.create = function(request, reply){
	
	var data = {
		name  : request.payload.name,
		category  : request.payload.category,
		price  : request.payload.price,
		ingredients  : request.payload.ingredients,
		photo  : request.payload.photo,
	};

	repository.create(data, function(err, data){
		if(err){
			reply.view('responses/default',{
				data : {
					error : true,
					status : 500,
					message : 'Erro ao cadastrar produto, por favor tente mais tarde.'
				}
			});			
		}

		reply.view('responses/default',{
			data : {
				error : false,
				status : 201,
				message : 'Produto cadastrado com sucessso!'
			}
		});
	});
};

productController.update = function(request, reply){
	
	var data = {
		name  : request.payload.name,
		category : request.payload.category,
		price  : request.payload.price,
		ingredients  : request.payload.ingredients,
		photo  : request.payload.photo,
	};

	var id = request.params.id;

	repository.update(id, data, function(err, data){
		if(err){
			reply.view('responses/default',{
				data : {
					error : true,
					status : 500,
					message : 'Erro ao alterar produto, por favor tente mais tarde.'
				}
			});			
		}

		reply.view('responses/default',{
			data : {
				error : false,
				status : 204,
				message : 'Produto alterado com sucessso!'
			}
		});
	});
};

productController.remove = function(request, reply){

	var id = request.params.id;

	repository.destroy(id, function(err, data){
		if(err){
			reply.view('responses/default',{
				data : {
					error : true,
					status : 500,
					message : 'Erro ao excluido produto, por favor tente mais tarde.'
				}
			});			
		}

		reply.view('responses/default',{
			data : {
				error : false,
				status : 204,
				message : 'Produto excluido com sucessso!'
			}
		});
	});
};

return productController;
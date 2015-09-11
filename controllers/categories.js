var repository = require('../repository/categories');

var categoryController = module.exports = {};

categoryController.index = function(request, reply){
	repository.all(function(err, data){
		if(err){
			reply.view('responses/default',{
				data : {
					error : true,
					status : 500,
					message : 'Erro ao listar cardápios, por favor tente mais tarde.'
				}
			});			
		}

		reply.view('categories',{
			products : data 
		});
	})
};
categoryController.create = function(request, reply){
	
	var data = {
			name  : request.payload.name
	};

	repository.create(data, function(err, data){
		if(err){
			reply.view('responses/default',{
				data : {
					error : true,
					status : 500,
					message : 'Erro ao cadastrar cardápio, por favor tente mais tarde.'
				}
			});			
		}

		reply.view('responses/default',{
			data : {
				error : false,
				status : 201,
				message : 'Cardápio cadastrado com sucessso!'
			}
		});
	});
};

categoryController.update = function(request, reply){
	
	var data = {
		name  : request.payload.name
	};

	var id = request.params.id;

	repository.update(id, data, function(err, data){
		if(err){
			reply.view('responses/default',{
				data : {
					error : true,
					status : 500,
					message : 'Erro ao alterar cardápio, por favor tente mais tarde.'
				}
			});			
		}

		reply.view('responses/default',{
			data : {
				error : false,
				status : 204,
				message : 'Cardápio alterado com sucessso!'
			}
		});
	});
};

categoryController.remove = function(request, reply){

	var id = request.params.id;

	repository.destroy(id, function(err, data){
		if(err){
			reply.view('responses/default',{
				data : {
					error : true,
					status : 500,
					message : 'Erro ao excluir cardápio, por favor tente mais tarde.'
				}
			});			
		}

		reply.view('responses/default',{
			data : {
				error : false,
				status : 204,
				message : 'Cardápio excluido com sucessso!'
			}
		});
	});
};

categoryController.listProductsByCategory = function(request, reply){

	var id = request.params.id;

	repository.listProductsByCategory(id, function(err, data){
		if(err){
			reply.view('responses/default',{
				data : {
					error : true,
					status : 500,
					message : 'Erro ao listar cardápios, por favor tente mais tarde.'
				}
			});
		}

		reply.view('products',{
			products : data
		});
	})
}

return categoryController;
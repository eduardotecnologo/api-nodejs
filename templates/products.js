var productsFormatted = json.array(products,function(json, product){
	json.set('id',product._id);
	json.set('name',product.name);
	json.set('category',product.category);
	json.set('price',product.price);
	json.set('ingredients',product.ingredients);
	json.set('photo',product.photo);
});

json.set('products', productsFormatted);
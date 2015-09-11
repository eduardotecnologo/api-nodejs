var categoriesFormatted = json.array(products,function(json, category){
	json.set('id',category._id);
	json.set('name',category.name);
});

json.set('categories', categoriesFormatted);
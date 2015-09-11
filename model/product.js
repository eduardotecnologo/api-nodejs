var product = mongoose.model('Product', { 
	category : Schema.Types.ObjectId,
	name: String,
	price : Number,
	ingredients : [{
		name : String,
		price : Number
	}],
	photo : String
});

module.exports = product;
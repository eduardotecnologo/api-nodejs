var placeSchema = require('./schema/place'),
productSchema = require('./schema/product'),
affiliateSchema = require('./schema/affiliate'),
collectionName = 'establishments';

var establishment = mongoose.model('establishment', {
	name: String,
	place : placeSchema,
	products : [productSchema],
	affiliate : affiliateSchema
}, collectionName);

module.exports = establishment;

var menuSchema = require('./schema/menu'),
		collectionName = 'menus';
var menu = mongoose.model('Menu',menuSchema,collectionName);

module.exports = menu;

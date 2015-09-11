var categoryModel = require('../model/category');
var productModel = require('../model/product');

var categoryRepository = module.exports = {};

categoryRepository.all = function (cb) {
    return categoryModel.find({}, function (err, data) {
        if (err) {
            cb(err, null);
        }

        cb(null, data);
    });
};

categoryRepository.create = function (data, cb) {
    var model = new categoryModel(data);
    model.save(function (err, data) {
        if (err) {
            cb(err, null);
        }

        cb(null, data);
    });
};

categoryRepository.update = function (id, data, cb) {
    var query = {_id: id};
    var dataUpdate = data;
    categoryModel.update(query, dataUpdate, function (err, data) {
        if (err) {
            cb(err, null);
        }

        cb(null, data);
    });
};

categoryRepository.destroy = function (id, cb) {
    var query = {_id: id};
    categoryModel.remove(query, function (err, data) {
        if (err) {
            cb(err, null);
        }

        cb(null, data);
    });
};

categoryRepository.listProductsByCategory = function(id , cb){
    return productModel.find({ category : id }, function (err, data) {
        if (err) {
            cb(err, null);
        }

        cb(null, data);
    });
};
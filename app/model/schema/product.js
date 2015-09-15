var productSchema = new mongoose.Schema({
  category : String,
  name: String,
  price : Number,
  ingredients : [{
    name : String,
    price : Number
  }],
  photo : String
});

module.exports = productSchema;

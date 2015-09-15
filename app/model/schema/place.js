var placeSchema = new mongoose.Schema({
  street : String,
  neighborhood : String,
  number : Number,
  city : String,
  state : String
});

module.exports = placeSchema;

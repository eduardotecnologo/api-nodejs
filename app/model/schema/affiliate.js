var affiliateSchema = new mongoose.Schema({
  is_affiliate : Boolean,
  affiliate_id : Schema.Types.ObjectId
});

 module.exports = affiliateSchema;

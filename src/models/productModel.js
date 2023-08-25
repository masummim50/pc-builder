const { default: mongoose } = require("mongoose");


const reviewSchema = new mongoose.Schema({
    name: String,
    review: String
  });
  
  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    status: String,
    brand: String,
    category: String,
    image: String,
    key_features: [String],
    description: String,
    rating: Number,
    reviews: [reviewSchema]
  });

export default mongoose.models.Products || mongoose.model("Products", productSchema);


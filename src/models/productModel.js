const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    rating: { type: Number, required: true },
    stock: { type: Number, required: true }
})

export default mongoose.models.Products || mongoose.model("Products", productSchema);


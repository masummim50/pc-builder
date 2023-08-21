const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title:String
})

export default  mongoose.models.Products ||  mongoose.model("Products", productSchema);

